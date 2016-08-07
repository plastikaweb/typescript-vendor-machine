/**
 * Created by plastik on 23/7/16.
 */
class Quarter {
    private value = .25;
    get Value() {
        return this.value;
    }
    set Value(newValue: number) {
        this.value = newValue;
    }
    getImageUrl(): string {
        return 'img/quarter.png';
    }
}

var coin = new Quarter();
