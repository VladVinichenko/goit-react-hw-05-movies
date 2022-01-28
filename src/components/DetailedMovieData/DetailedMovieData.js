import Section from '../Section/Section'
import s from './DetailedMovieData.module.css'
// import React, { lazy, Suspense } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { ROUTERS } from '../../consts';
import { Route } from 'react-router-dom';
// import Loader from '../Loader/Loader';
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'


// const Cast = lazy(() => import('../Cast/Cast'))
// const Reviews = lazy(() => import('../Reviews/Reviews'))


function DetailedMovieData() {
  const { id } = useParams()

  return (
    <Section>
      <div className={s.box}>
        <div className={s.buttonBox}>
          <NavLink to={ROUTERS.MOVIES + `/${id}` + ROUTERS.CAST} exact activeClassName={s.selected} className={s.link}>Cast</NavLink>
          <NavLink to={ROUTERS.MOVIES + `/${id}` + ROUTERS.REVIEWS} exact activeClassName={s.selected} className={s.link}>Reviews</NavLink>
        </div>
        {/* <Suspense fallback={<Loader />}> */}
        <Route path={ROUTERS.MOVIES + `/${id}` + ROUTERS.CAST} render={props => <Cast {...props} modieId={id} />} />
        <Route path={ROUTERS.MOVIES + `/${id}` + ROUTERS.REVIEWS} render={props => <Reviews {...props} modieId={id} />} />

        {/* </Suspense> */}
      </div>
    </Section>
  )
}

export default DetailedMovieData