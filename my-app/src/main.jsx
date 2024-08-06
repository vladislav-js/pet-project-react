import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './components/header/HeaderMegaMenu';
import { HeroContentLeft } from './components/promo/HeroContentLeft';




ReactDOM.createRoot(document.getElementById('root')).render(
<MantineProvider>
<HeaderMegaMenu/>
<HeroContentLeft/>
  </MantineProvider>,
)
