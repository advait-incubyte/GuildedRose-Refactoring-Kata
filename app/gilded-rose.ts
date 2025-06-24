export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Item[];

  constructor(items: Item[] = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case 'Sulfuras, Hand of Ragnaros':
          break;

        case 'Aged Brie':
          this._updateQualityofAgedBrie(item);
          break;

        case 'Backstage passes to a TAFKAL80ETC concert':
          this._updateQualityOfBackstagePass(item);
          break;

        default:
          this._updateQualityOfNormalItem(item)
          break;
      }
    }
  
    return this.items;
  }

  private _updateQualityOfNormalItem(item: Item) {
    item.sellIn -= 1
    item.quality -= (item.sellIn < 0 ? 2 : 1)
    item.quality = Math.max(item.quality, 0)
  }

  private _updateQualityOfBackstagePass(item: Item) {
    item.sellIn -= 1;

    if (item.sellIn < 0) {
      item.quality = 0;
      return
    }

    item.quality += 1;
    if (item.sellIn <= 10)
      item.quality += 1;
    if (item.sellIn <= 5)
      item.quality += 1;

    item.quality = Math.min(item.quality, 50);
  }

  private _updateQualityofAgedBrie(item: Item) {
    item.sellIn -= 1
    item.quality += (item.sellIn < 0 ? 2 : 1)
    item.quality = Math.min(item.quality, 50)
  }
}
