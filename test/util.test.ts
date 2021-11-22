import { needRename } from '../src/utils';

describe('util', () => {
  it('needRename', () => {
    expect(
      needRename('E03 [UHA-WINGS] [Ousama Ranking] [03] [x264 1080p] [CHS].mp4')
    ).toBe(false);
    expect(
      needRename('[UHA-WINGS] [Ousama Ranking] [03] [x264 1080p] [CHS].mp4')
    ).toBe(true);
    expect(needRename('E01.mp4')).toBe(false);
    expect(needRename('tv-show.nfo')).toBe(false);
    expect(needRename('tv-show.mp4')).toBe(false);
    expect(needRename('tv-show.jpg')).toBe(false);
  });
});
