import { Header } from './components/Header';
import {Post, PostType} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/FerrazM.png',
      name: 'Matheus Ferraz',
      role: 'Dev Junior',
    },
    content: [ 
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return.'},
      {type: 'link', content: 'jane.design/doctorcare'},        
    ],
    publishedAt: new Date('2023-01-02 10:45:00') 
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego',
      role: 'CTO @Rocket Seat',
    },
    content: [ 
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return.'},
      {type: 'link', content: 'jane.design/doctorcare'},        
    ],
    publishedAt: new Date('2023-01-02 10:45:00') 
  },
];

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return (
            <Post
              key={post.id}
              post={post}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

