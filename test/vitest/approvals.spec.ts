import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose Approval', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();

    expect(items).toMatchSnapshot();
  });
});
