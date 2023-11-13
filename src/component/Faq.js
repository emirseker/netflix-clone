import React, { useState } from 'react'
import '../styles/Sss.css'
import { VscAdd } from "react-icons/vsc";
import { VscChevronRight} from "react-icons/vsc";

const faq = [
    {
        id:1,
        title:'Netflix nedir?',
        desc:`Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir.

        Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!`,
        switch: false
    },
    {
        id:2,
        title:"Netflix'in maliyeti nedir ?",
        desc:"Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 99,99 TL ile 199,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok.",
        switch: false
    },
    {
        id:3,
        title:'Nerede izleyebilirim?',
        desc:`İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın.

        Favori içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde götürün.`,
        switch: false
    },
    {
        id:4,
        title:'Nasıl iptal ederim?',
        desc:'Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun.',
        switch: false
    },
    {
        id:5,
        title:"Netfklix'te ne izleyebilirim?",
        desc:'Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin.',
        switch: false
    },
    {
        id:6,
        title:'Netflix çocuklar için uygun mudur?',
        desc:`Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece izlenebilecek dizi ve filmleri kendilerine özel bir alanda izlemelerini sağlarken kontrolü ebeveynlere verir.

        Çocuk profillerinde bulunan PIN korumalı ebeveyn kontrolleri sayesinde, çocukların izleyebileceği içeriklerin yetişkinlik düzeylerini kısıtlayabilir ve onların görmesini istemediğiniz belirli içerikleri engelleyebilirsiniz.`,
        switch: false
    }
]

const Faq = () => {


    const [faqList, setFaqList] = useState(faq);

    const styleChanges = {
        open: {maxHeight: '100vh', padding: '1em'},
        rotate: {transform:'rotate(45deg)'}
    } 

    const tabSwitch = (id:number) => {
    
        const changeSwitch = faqList.map((item) => {
            if(item.id !== id) {
                return {
                    ...item, 
                    switch: false
                }
            } else {
                return {
                    ...item, 
                    switch: !item.switch
                }
            } 
        });
    
       setFaqList(changeSwitch);
    }
   


  return (
    <div className='position-relative tab-container'>
        <div className="card-box">
            <div className="tabs">
                <div className='faq-title' style={{marginBottom: '1.2rem'}}>Sıkça Sorulan Sorular</div>
                {
                    faqList.map((list) => (
                        <div className="tab" key={list.id}>
                            <div className="tab-title" onClick={()=>tabSwitch(list.id)}>{list.title}
                            <VscAdd className='tab-icon' style={list.switch ? styleChanges.rotate : {}}/>
                            </div>
                            <div className="tab-content" style={list.switch ? styleChanges.open : {}}>{list.desc}</div>
                        </div>
                    ))
                }
            </div>
            
            <h3 className='hero-text-title' >İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.</h3>
            <div className='giris'>
              <input className='input' name="email"  value="E-posta adresi"></input>
              <button className='button' >Başlayın<VscChevronRight/></button>
            </div>
        </div>
    

        <div className='card-bar'></div>
    </div>
  )
}

export default Faq