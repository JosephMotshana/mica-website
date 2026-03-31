import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description }) => {
  const location = useLocation();
  const baseUrl = "https://micageneralauto.co.za";
  const currentUrl = `${baseUrl}${location.pathname}`;
  const previewImage = `${baseUrl}/android-chrome-512x512.png`;

  return (
    <Helmet>
      {/* Search Engine Setup */}
      <title>{title} | Mica General Auto</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Meta/WhatsApp/AI Bot Setup */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Mica General Auto`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={previewImage} />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter/Edge Setup */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Mica General Auto`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImage} />
    </Helmet>
  );
};

export default SEO;