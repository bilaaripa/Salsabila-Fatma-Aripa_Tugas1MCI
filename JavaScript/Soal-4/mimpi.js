async function membidikMimpi() {

    console.log("Halo, berikut ini adalah impian di tahun 2023 yang ditulis oleh tangan yang belum pernah (dia) genggam.\n");

    const bismillah = [
        "Divisi Finance Schematics Kaya", 
        "IP Naik", 
        "Schematics dan BIMITS Lancar", 
        "Dapet Magang WFH bidang sosial media specialis(kalo bisa paid)", 
        "Punya Portofolio UI/UX yang keren", 
        "Kerja sampingan jualan sosis telur" , 
        "Pengen banget buat konten podcast di Spotify/ Tiktok tentang kehidupan, cinta, social, dan tentang kamu\n"];

    const tampilMimpi = () => {
        console.log("List Mimpi:");
        for(let i = 0; i < bismillah.length; i++) {
            console.log(`mimpi ke - ${i+1}. ${bismillah[i]}`);
        }
    };
    
    const promise = (callback) => new Promise(function(resolve, reject) {
      setTimeout(() => {
        callback();
        resolve("Al-Fatihah");
      }, 3000);
    });

    setTimeout(() => {
      promise(tampilMimpi).then((result) => {
        console.log(result);
      });
    }, 2000);
  }
  
  membidikMimpi();
  