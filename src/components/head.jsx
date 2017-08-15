import React from 'react';
import Logo from '../../static/me.jpg';
import {Helmet} from 'react-helmet';

export default class Head extends React.Component {
  render() {
    const description = `I'm Miro, a 24 years Senior Frontend Developer at Pipeliner CRM`;
    const schemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": "Person",
      "url": "http://www.mirokoczka.com",
      "name": "Miro Koczka",
      "description": description,
      "telophone": "+421 903 199 927"
    };
    return (
      <Helmet
        title="Miro Koczka"
        meta={[
          {name: 'description', content: description},
          {
            name: 'keywords',
            content: 'Miro, Miroslav, Koczka, usbecko, Pipeliner, Crm, Frontend, Developer, Javascript, Angular, React, Typescript'
          },
        ]}>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        <meta property="og:url" content="https://www.mirokoczka.com"/>
        <meta property="og:title" content="Miro Koczka"/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={Logo}/>
        <meta property="fb:app_id" content=""/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="@mirokoczka"/>
        <meta name="twitter:title" content="Miro Koczka"/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={Logo}/>
      </Helmet>
    )
  }
}