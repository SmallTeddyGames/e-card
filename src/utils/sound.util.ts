import { useGlobalState } from "@/store";

const state = useGlobalState();

// 音频缓存
const audioCache: Map<string, HTMLAudioElement> = new Map();

/**
 * 获取音频元素（带缓存）
 */
const getAudio = (src: string): HTMLAudioElement => {
  if (!audioCache.has(src)) {
    const audio = new Audio(src);
    audio.preload = 'auto';
    audioCache.set(src, audio);
  }
  return audioCache.get(src)!;
};

/**
 * 播放音效
 * @param name 音效名称
 * @param volume 音量 0-1
 */
export const playSound = (name: 'deal' | 'draw' | 'shuffle' | 'flip' | 'win' | 'lose' | 'click' | 'impact', volume: number = 0.5): void => {
  if (!state.value.soundEnabled) return;

  const soundMap: Record<string, string> = {
    deal: new URL('../assets/music/发牌.wav', import.meta.url).href,
    draw: new URL('../assets/music/抽牌.wav', import.meta.url).href,
    shuffle: new URL('../assets/music/洗牌.wav', import.meta.url).href,
    flip: new URL('../assets/music/抽牌.wav', import.meta.url).href,
    win: new URL('../assets/music/发牌.wav', import.meta.url).href,
    lose: new URL('../assets/music/发牌.wav', import.meta.url).href,
    click: new URL('../assets/music/抽牌.wav', import.meta.url).href,
    impact: new URL('../assets/music/洗牌.wav', import.meta.url).href,
  };

  try {
    const audio = getAudio(soundMap[name]);
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch (e) {
    // 忽略音频错误
  }
};

/**
 * 切换音效开关
 */
export const toggleSound = (): boolean => {
  state.value.soundEnabled = !state.value.soundEnabled;
  return state.value.soundEnabled;
};
