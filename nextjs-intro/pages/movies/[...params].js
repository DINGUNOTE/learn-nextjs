import { useRouter } from 'next/router';
import SEO from '../../components/SEO';

export default function Detail({ params }) {
  const [title, id] = params || [];
  return (
    <div>
      <SEO title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
