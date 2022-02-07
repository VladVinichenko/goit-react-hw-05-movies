import { Fragment, lazy, Suspense, useEffect } from 'react'
import Section from '../../components/Section/Section';
import React, { useState } from "react";
import Loader from '../../components/Loader/Loader';
import { matchPath, useLocation, useHistory } from 'react-router-dom';
import { ROUTERS } from '../../consts';
const Searchbar = lazy(() => import('../../components/Searchbar/Searchbar'))
const ImageGallery = lazy(() => import('../../components/ImageGallery/ImageGallery'))



export function MoviesPage() {
  const [searchName, setSearchName] = useState()


  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar onSubmitSearchName={setSearchName} value={searchName} />
      </Suspense>
      <Section>
        <Suspense fallback={<Loader />}>
          <ImageGallery options='search' searchValue={searchName} />
        </Suspense>
      </Section>

    </Fragment>
  )
}
