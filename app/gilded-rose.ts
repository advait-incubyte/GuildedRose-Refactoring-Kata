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
    const exceptionalItems = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros'];

    for (const item of this.items) {
      if (!exceptionalItems.includes(item.name)) {
        if (item.quality > 0) {
          item.quality = item.quality - 1
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              item.quality = Math.min(item.quality + 1, 50)
            }
            if (item.sellIn < 6) {
              item.quality = Math.min(item.quality + 1, 50)
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert' 
            && item.name != 'Sulfuras, Hand of Ragnaros') {
              if (item.quality > 0) {
                item.quality = item.quality - 1
              }
          } else {
            item.quality = 0
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }

    return this.items;
  }
}
