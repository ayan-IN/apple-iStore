import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'iStore | Best Apple Premium Reseller',
  description:
    'iStore Apple Premium Reseller. We are Authorised Resellers of Apple Products. Find the best offers on iPhone, iPad, MacBook, Watch & more.',
  keywords:
    'apple products, electronics,buy apple products, cheap apple products, macbook, iphone',
}

export default Meta
