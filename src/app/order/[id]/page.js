import SingleOrderArea from "@components/order-area";


export const metadata = {
  title: "Single Order - Techora Shop",
};

const OrderPage = async ({ params }) => {
  const { id } = await params;
  return <SingleOrderArea orderId={id} />;
};

export default OrderPage;
