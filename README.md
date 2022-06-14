# NextJS Introduction

* `pages` 폴더에 생성한 파일명으로 자동으로 라우팅을 설정해준다.
* react를 import하지 않아도 `JSX`를 사용할 수 있다.
* NextJS에서 제공되는 `Link`를 import해서 페이지 이동할 때 사용할 수 있다.
  ```javascript
  import Link from 'next/link';

  export default function NavBar() {
    return (
      <nav>
        <Link href="/"> // Link는 브라우저에서 보여지지 않기 때문에 스타일이나 클래스를 주고싶다면 a태그에 줘야한다.
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    );
  }
  ```
* useRouter() 훅을 사용해서 router 정보를 확인할 수 있다.
* css를 모듈화해서 스타일을 정의하면 컴포넌트 간 클래스 네임 충돌을 막을 수 있다.
  ```css
  /* NavBar.module.css */
  .nav{display:flex;justify-content:space-between;background-color:tomato;}
  ```
  ```javascript
  // NavBar.js
  import styles from './NavBar.module.css';

  export default function NavBar() {
    return (
      <nav className={styles.nav}> // 브라우저에서 실제 클래스 네임을 확인해보면 임의의 텍스트로 변환되어있다.
        
      </nav>
    );
  }
  ```
  * 하지만 파일을 추가로 생성해야하고 import를 해야하기 때문에 사용하기 번거롭다.
* `styled jsx`를 사용하면 컴포넌트 안에서 독립된 css를 사용할 수 있다.
  ```javascript
  export default function NavBar() {
    return (
      <nav>
        <a>Link</a>
        <a>Link</a> 
      </nav>
      <style jsx>{`
        nav{background-color:tomato;}
        a{text-decoration:none;}
      `}</style>
      // 클래스네임 없이 태그에 스타일을 주면 실제 브라우저에서는 임의의 이름으로 클래스가 부여되고 스타일이 정의된다.
      // 다른 컴포넌트와 동일한 클래스가 사용되더라도 임의의 클래스와 더블클래스로 스타일을 줘버리기 때문에 scoped style이 정의된다.
    );
  }
  ```
* `Custom App Component(_app.js)`에서 공통 레이아웃을 정의할 수 있다. 전역 css를 import하면 전역 스타일링이 가능하다. Layout 컴포넌트를 활용하는 방법도 있다. [https://nextjs.org/docs/basic-features/layouts](https://nextjs.org/docs/basic-features/layouts)


> <b>출처</b><br>
[https://nomadcoders.co/nextjs-fundamentals](https://nomadcoders.co/nextjs-fundamentals)
