export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  github?: string;
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Aria의 코딩생활',
  description: '야매가 8할 프론트엔드개발자',
  coverImage: 'img/writing.png',
  logo: 'img/ghost-logo.png',
  lang: 'en',
  siteUrl: 'https://gatsby-casper.netlify.com',
  facebook: 'https://www.facebook.com/shoo7830',
  twitter: 'https://twitter.com/shoo7830',
  github: 'https://github.com/shoo7830',
  showSubscribe: true,
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper',
};

export default config;
