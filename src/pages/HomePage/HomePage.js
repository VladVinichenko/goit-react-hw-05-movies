import s from './HomePage.module.css'

import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Section from '../../components/Section/Section';


export function HomePage() {


  return (
    <Fragment>
      <Section>
        <ImageGallery options='trending' />
      </Section>
    </Fragment>
  )
}
