/**
 * Procedural Web Audio API sound & relaxing ambient music engine.
 * Works 100% offline with zero external audio assets.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private musicEnabled = false;
  private sfxEnabled = true;
  private loopTimer: number | null = null;
  private stepIdx = 0;
  private masterGain: GainNode | null = null;

  // Warm Cmaj9 -> Am9 -> Fmaj7 -> G6 pentatonic frequencies
  private readonly chords: number[][] = [
    [261.63, 329.63, 392.0, 493.88, 587.33],
    [220.0, 261.63, 329.63, 392.0, 493.88],
    [174.61, 220.0, 261.63, 329.63, 392.0],
    [196.0, 246.94, 293.66, 329.63, 440.0],
  ];

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;

    if (!this.ctx) {
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.25;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setSfxEnabled(enabled: boolean) {
    this.sfxEnabled = enabled;
  }

  public isSfxEnabled(): boolean {
    return this.sfxEnabled;
  }

  public isMusicEnabled(): boolean {
    return this.musicEnabled;
  }

  public toggleMusic(force?: boolean): boolean {
    const next = force !== undefined ? force : !this.musicEnabled;
    this.musicEnabled = next;
    if (next) {
      this.startMusicLoop();
    } else {
      this.stopMusicLoop();
    }
    return this.musicEnabled;
  }

  private startMusicLoop() {
    const ctx = this.ensureContext();
    if (!ctx || this.loopTimer !== null) return;

    const tick = () => {
      if (!this.musicEnabled || !this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const chord = this.chords[Math.floor(this.stepIdx / 4) % this.chords.length];
      const noteIndex = this.stepIdx % chord.length;
      const freq = chord[noteIndex];

      // Warm bell/pad pluck
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = this.stepIdx % 4 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(950, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(this.stepIdx % 4 === 0 ? 0.14 : 0.08, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.45);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 1.5);

      // Gentle bass root on beat 0 of each bar
      if (this.stepIdx % 4 === 0) {
        const bass = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bass.type = 'sine';
        bass.frequency.setValueAtTime(chord[0] / 2, now);
        bassGain.gain.setValueAtTime(0.0001, now);
        bassGain.gain.exponentialRampToValueAtTime(0.12, now + 0.12);
        bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);
        bass.connect(bassGain);
        bassGain.connect(this.masterGain);
        bass.start(now);
        bass.stop(now + 2.45);
      }

      this.stepIdx += 1;
    };

    tick();
    this.loopTimer = window.setInterval(tick, 750);
  }

  public stopMusicLoop() {
    if (this.loopTimer !== null) {
      window.clearInterval(this.loopTimer);
      this.loopTimer = null;
    }
  }

  public playTap() {
    if (!this.sfxEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520 + Math.random() * 60, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.06);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  public playWrong() {
    if (!this.sfxEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(210, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.18);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.21);
  }

  public playHint() {
    if (!this.sfxEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    [587.33, 880].forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);
      gain.gain.setValueAtTime(0.0001, now + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.18, now + idx * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.25);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.26);
    });
  }

  public playWin() {
    if (!this.sfxEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.075);
      gain.gain.setValueAtTime(0.0001, now + idx * 0.075);
      gain.gain.exponentialRampToValueAtTime(0.22, now + idx * 0.075 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.075 + 0.36);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + idx * 0.075);
      osc.stop(now + idx * 0.075 + 0.38);
    });
  }
}

export const soundEngine = new SoundEngine();
