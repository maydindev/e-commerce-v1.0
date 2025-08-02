import { Typography } from "@mui/material";

export default function HomePage() {
  return (
    <>
      {/* <Typography variant="h2">Home Page</Typography> */}
      <Typography variant="h3" textAlign="center" sx={{ mt: 2, mb: 4 }}>
        Uygulama Sunumu
      </Typography>
      <hr></hr>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        <h3>Kullandığım Teknolojiler</h3>
        <ul>
          <li>
            <strong>Back-end: </strong> .NET Core 9, Entity Framework Core, Identity API, MSSQL Server
          </li>
          <li>
            <strong>Front-end: </strong> React (Typescript), React Router, Axios, React Toastify, Redux
            Toolkit, Material UI, JWT{" "}
          </li>
        </ul>
      </Typography>
      <hr></hr>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        <h3>Projenin Genel İşleyişi</h3>
        <ul>
          <li>
            Katalog sayfasından ürünleri listeleyebilir, sepete ekleyebilir veya
            ürün hakkında bilgi almak için ürün detayına gidebilirsiniz.
          </li>
          <li>
            Uygulamaya kayıt olmadan da sepetinize ürün ekleyebilir, sonrasında
            tarayıcıdan çıkıp yeniden gelseniz bile sepetinize kaldığınız yerden ulaşabilirsiniz.
          </li>
          <li>
            Sepetinizdeki ürünlerin miktarını değiştirebilir veya
            silebilirsiniz.
          </li>
          <li>
            Sepetiniz oluştuysa kullanıcı girişi yaparak ya da daha önce kayıt
            olmadıysanız kayıt olarak, sonrasında üç aşamalı
            (teslimat-ödeme(Iyzico)-özet) adımlarda ilerleyerek siparişinizi
            oluşturabilirsiniz.
          </li>
        </ul>
      </Typography>
      <hr></hr>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        <h3>Kaynaklar</h3>
        <ul>
          <li>
            Proje notlarımı{" "}
            <a
              target="_blank"
              href="https://medium.com/@maydin.dev/net-9-ve-react-ile-fullstack-e-ticaret-projesi-geli%C5%9Ftirme-proje-notlar%C4%B1-777da2c728f1"
            >
              bu yazımdan
            </a>{" "}
            inceleyebilirsiniz. Yazıyı zaman içerisinde daha görsel hale
            getirmeyi hedefliyorum.
          </li>
          <li>
            Github repomu{" "}
            <a
              target="_blank"
              href="https://github.com/maydindev/e-commerce-v1.0"
            >
              buradan
            </a>{" "}
            inceleyebilirsiniz.
          </li>
        </ul>
      </Typography>
      <hr></hr>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        <h3>İletişim</h3>
        <ul>
          <li>Bana maydin.dev@outlook.com mail adresinden yazabilirsiniz. Şimdilik başlangıç aşamasındaki bu projeyi zaman içerisinde yeni özellikler ekleyerek geliştirmeyi hedefliyorum.</li>
        </ul>
      </Typography>
    </>
  );
}
