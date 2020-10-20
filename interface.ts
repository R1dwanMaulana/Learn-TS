type Movies = {  
    judul: string;
    aktor: string;
    sutradara: string;
    durasi: number;
    
}
class Mymovie implements Movies {
    judul: string;
    aktor: string;
    sutradara: string;
    durasi: number;
    
    constructor(judul: string, aktor: string, sutradara: string, durasi: number) {
        this.judul = judul;
        this.aktor = aktor;
        this.sutradara = sutradara;
        this.durasi = durasi;
    }
}