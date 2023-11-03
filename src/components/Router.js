import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import EditModeStore from "../stores/EditModeStore";
import { createContext, Suspense, lazy } from 'react';
import HeaderFooter from './universal/header-footer/HeaderFooter';
import Loading from './universal/loading/Loading'
import { Helmet } from 'react-helmet-async';
import SearchFilterStore from '../stores/SearchFilterStore';

const BaseTypes = lazy(() => import(
  './screens/basetypes/BaseTypes'))
const Scripts = lazy(() => import(
  './screens/scripts/Scripts'))
const BaseTypeDetail = lazy(() => import(
  './screens/basetype-detail/BaseTypeDetail'))
const BaseTypesSearchResult = lazy(() => import(
  './screens/basetype-search-result/BaseTypesSearchResult'))
const BaseTypeUpdate = lazy(() => import(
  './screens/basetype-update/BaseTypeUpdate'))
const ScriptUpdate = lazy(() => import(
  './screens/script-update/ScriptUpdate'))
const ScriptsSearchResult = lazy(() => import(
  './screens/script-search-result/ScriptsSearchResult'))
const PageNotFound = lazy(() => import(
  '../../src/components/universal/page-not-found/PageNotFound'))

export const EditModeStoreContext = createContext({});
export const SearchFilterStoreContext = createContext({});

const Router = () => {
  return <BrowserRouter>
    <div>
    <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`base-uri 'self' ; 
          object-src 'none' ; 
          script-src 'self' ; 
          style-src * data: blob: 'unsafe-inline'; 
          default-src 'self'; 
          connect-src 'self'; 
          worker-src 'self'; 
          img-src 'self' ; 
          font-src 'self'; 
          frame-src 'self'; 
          manifest-src 'self';
          style-src-elem * data: blob: 'unsafe-inline';`}
        ></meta>
      </Helmet>
    </div>
    <SearchFilterStoreContext.Provider value={new SearchFilterStore()}>
    <EditModeStoreContext.Provider value={new EditModeStore()}>
      <HeaderFooter content={
        <Routes>
          <Route path="/" element={<Navigate replace to="/basetypes" />} />

          <Route element={
            <Suspense fallback=
              {<Loading />}>
              <BaseTypes />
            </Suspense>
          } path='/basetypes' />

          <Route element={
            <Suspense fallback=
              {<Loading />}>
              <BaseTypeDetail />
            </Suspense>
          } path='/basetypes/detailed/:id' />

          <Route element={
            <Suspense fallback=
              {<Loading />}>
              <BaseTypeUpdate />
            </Suspense>
          } path='/basetypes/update/:id' />

          <Route element={
            <Suspense fallback=
              {<Loading />}>
              <BaseTypesSearchResult />
            </Suspense>
          } path='/basetypes/search/:searchInput' />

          <Route element={
            <Suspense fallback=
              {<Loading />}>
              <Scripts />
            </Suspense>
          } path='/scripts' />

          <Route element={
            <Suspense fallback=
              {<Loading />}>
              <ScriptUpdate />
            </Suspense>
          } path='/scripts/update/:id' />

          <Route element={
            <Suspense fallback=
              {<Loading />}>
              <ScriptsSearchResult />
            </Suspense>
          } path='/scripts/search/:searchInput' />

          <Route path='*' element={
            <Suspense fallback=
              {<Loading />}>
              <PageNotFound />
            </Suspense>
          } />
        </Routes>
      } />
    </EditModeStoreContext.Provider>
    </SearchFilterStoreContext.Provider>
  </BrowserRouter>
}

export default Router

