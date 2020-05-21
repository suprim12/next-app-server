import Head from 'next/head'
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getposts } from '../store/actions/postAction';
import MainLayout from '@/components/hoc/MainLayout';


export default function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);
  useEffect(() => {
    dispatch(getposts());
  }, [dispatch]);
  return (
    <Fragment>
      <MainLayout>
        <Head>
          <title>Beholds - Get Creative</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="wrapper">
          <h1>Hello Bithces</h1>
          {posts && posts.map(post => (
            <li key={post._id}>{post.title}</li>
          ))}
        </div>
      </MainLayout>
    </Fragment>
  )
}
