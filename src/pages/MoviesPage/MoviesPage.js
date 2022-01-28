import { Fragment, lazy, Suspense } from 'react'
import Section from '../../components/Section/Section';
import React, { useState } from "react";
import Loader from '../../components/Loader/Loader';

const Searchbar = lazy(() => import('../../components/Searchbar/Searchbar'))
const ImageGallery = lazy(() => import('../../components/ImageGallery/ImageGallery'))

export function MoviesPage() {

  const [searchName, setSearchName] = useState('')

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar onSubmitSearchName={setSearchName} />
      </Suspense>
      <Section>
        <Suspense fallback={<Loader />}>
          <ImageGallery searchName={searchName} options='search' />
        </Suspense>
      </Section>

    </Fragment>
  )
}
