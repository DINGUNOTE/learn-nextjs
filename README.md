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
* `Custom App Component(_app.js)`에서 공통 레이아웃을 정의할 수 있다. 전역 css를 import하면 전역 스타일링이 가능하다.
* `Layout Pattern`을 활용해서 공통 레이아웃 정의하기
  * Layout.js에서 공통 레이아웃을 정의할 수 있다.
  * `Head`를 import해와서 페이지 별 타이틀, 메타 태그를 설정할 수 있다.
* `redirects` - 특정 URL로 접근 시 다른 경로로 리다이렉트 시킬 수 있다.
  ```javascript
  // next.config.js
  module.exports = {
    async redirects() {
      return [
        {
          source: '/about', // 접근한 URL
          destination: '/', // 리다이렉트될 URL
          permanent: true, // 브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정 됨
        },
      ]
    },
  }
  ```
* `rewrite` - 유저를 리다이렉트 시키긴 하지만 URL은 변경되지 않는다.(해당 기능으로 API 키를 숨길 수 있다.)
* `next/image`를 사용해서 이미지 최적화(동적 이미지 URL을 사용할 경우 보안상에 이유로 `next.config.js`에 해당 도메인을 추가해줘야 함)
* `getServerSideProps()` - 서버사이드에서만 실행되고, 브라우저에서 실행되지 않는다. 매 요청 시 마다 실행되고, 그 결과에 따른 값을 props로 넘겨주고 미리 렌더링한다. 유저가 페이지에 접속했을 때 HTML을 서버사이드에서 미리 렌더링, API가 느리다면 렌더링이 시작되기 전까지 오래 걸릴 수 있다.


> <b>출처</b><br>
[https://nomadcoders.co/nextjs-fundamentals](https://nomadcoders.co/nextjs-fundamentals)
