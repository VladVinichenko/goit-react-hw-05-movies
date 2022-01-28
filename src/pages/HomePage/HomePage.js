import React, { lazy, Suspense } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Section from '../../components/Section/Section';
import Loader from '../../components/Loader/Loader';
const ImageGallery = lazy(() => import('../../components/ImageGallery/ImageGallery'))


export function HomePage() {
  return (
    <Fragment>
      <Section>
        <Suspense fallback={<Loader />}>
          <ImageGallery options='trending' />
        </Suspense>
      </Section>
    </Fragment>
  )
}
