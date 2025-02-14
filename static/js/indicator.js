class ActiveIndicator {
    constructor(activeElement, container) {
        this.activeElement = activeElement; // .indicator öğesi
        this.container = container; // Menü öğeleri bulunan container
        this.items = this.container.querySelectorAll('.indicate'); // Menü öğeleri
        this.init(); // Başlatma
        this.currentIndex = 0;
    }

    init() {
        // Başlangıçta aktif öğeyi ilk menü öğesinin konumuna ayarla
        this.updatePosition(this.items[0]);

        

        // Her menü öğesine tıklama olayını ekle
        this.items.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                //e.preventDefault(); // Linkin varsayılan davranışını engelle
                this.currentIndex = index;
                this.updatePosition(this.items[index]); // Tıklanan öğenin konumunu ayarla
            });
        });

        // Container boyutları değiştiğinde pozisyonu güncelle
        window.addEventListener('resize', () => {
            this.updatePosition(this.items[this.currentIndex]); // İlk öğeyi referans alarak güncelle
        });
    }

    updatePosition(clickedItem) {
        // Tıklanan öğenin pozisyonunu al
        const rect = clickedItem.getBoundingClientRect();
    
        // .active öğesinin sol ve genişlik değerlerini ayarla
        this.activeElement.style.left = `${rect.left - this.container.getBoundingClientRect().left}px`;
        this.activeElement.style.width = `${rect.width}px`; // Genişliği tıklanan öğeye göre ayarla


    }
}

// Sayfa yüklendiğinde aktif öğeyi başlat
window.onload = () => {
    const activeElement = document.querySelector('.indicator');
    const container = document.querySelector('.branchsContainer');
    const activeBranchIndicator = new ActiveIndicator(activeElement, container); // ActiveIndicator sınıfını başlat
};