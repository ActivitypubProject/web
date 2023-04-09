const Test = ({ data }: any) => <div>{data}</div>;
export default Test;

export async function getServerSideProps() {
  console.log("test", 123)
  return {
    props: {
      data: 123
    }
  }
}