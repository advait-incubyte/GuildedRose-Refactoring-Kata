import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose: Everyday, it:', () => {
  it('should decrease quality of non-exceptional items by 1', () => {
    const items: Item[] = [new Item('foo', 1, 10)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(9);
  })

  it('should decrease sellIn (sell by date) of non-exceptional items by 1', () => {
    const items: Item[] = [new Item('foo', 1, 10)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].sellIn).toBe(0);
  })

  it('should decrease quality of non-exceptional items twice as fast (by 2) if sell by date has passed', () => {
    const items: Item[] = [new Item('foo', 0, 10)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(8);
  })

  it('should increase quality of Aged Brie by 1', () => {
    const items: Item[] = [new Item('Aged Brie', 1, 10)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(11);
  })

  it('should increase quality of Aged Brie twice as fast (by 2) after sell by date has passed', () => {
    const items: Item[] = [new Item('Aged Brie', 0, 10)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(12);
  })

  it('should increase quality of Backstage passes by 1 if there are more than 10 days left to sell', () => {
    const items: Item[] = [new Item('Backstage passes to a TAFKAL80ETC concert', 12, 10)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(11);
  })

  it('should increase quality of Backstage passes by 2 if there are 10 days or less left to sell', () => {
    const items: Item[] = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(12);
  })

  it('should increase quality of Backstage passes by 3 if there are 5 days or less left to sell', () => {
    const items: Item[] = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(13);
  })

  it('should set quality of Backstage passes to 0 after the concert/sell by date has passed', () => {
    const items: Item[] = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(0);
  })

  it('should not increase quality of any item beyond 50', () => {
    const items: Item[] = [
      new Item('Aged Brie', 1, 50), 
      new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50)
    ];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(50);
  })

  it('should not decrease quality of Sulfuras; its quality should always be 80', () => {
    const items: Item[] = [new Item('Sulfuras, Hand of Ragnaros', 1, 80)];
    const gildedRose = new GildedRose(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(80);
  })
});
