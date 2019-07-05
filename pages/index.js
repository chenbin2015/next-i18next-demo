import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

import { i18n, Link, withTranslation } from '../i18n'

import Title from '../components/Title'
import Footer from '../components/Footer'

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer'],
    }
  }

  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <Head>
          <meta content="width=device-width,initial-scale=1,user-scalable=no" name="viewport" />
        </Head>
        <Title />
        <button type="button" onClick={() => i18n.changeLanguage('en')}>
          en
        </button>
        <button type="button" onClick={() => i18n.changeLanguage('de')}>
          de
        </button>
        <button type="button" onClick={() => i18n.changeLanguage('zh')}>
          zh
        </button>
        {t('change-locale')}

        <Link href="/second-page">
          <button type="button">{t('to-second-page')}</button>
        </Link>
        <Footer />
      </React.Fragment>
    )
  }
}

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
