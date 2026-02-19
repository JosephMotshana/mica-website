import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title} | Mica</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={window.location.href} />
  </Helmet>
);

export default SEO;