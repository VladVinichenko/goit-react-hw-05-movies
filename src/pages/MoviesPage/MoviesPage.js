import { Fragment } from 'react'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import Searchbar from '../../components/Searchbar/Searchbar'
import s from './MoviesPage.module.css'
import Section from '../../components/Section/Section';
import React, { useState, useEffect } from "react";

export function MoviesPage() {

  const [searchName, setSearchName] = useState('')

  return (
    <Fragment>
      <Searchbar onSubmitSearchName={setSearchName} />
      <Section>
        <ImageGallery searchName={searchName} options='search' />
      </Section>
    </Fragment>
  )
}
