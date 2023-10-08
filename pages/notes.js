import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Notes({ notes }) {
  console.log("notes data => ", notes);
  return (
    <>
      <LayoutComponent metaTitle="Notes">
        {notes.data.map((item) => (
          <div style={{ border: "1px solid grey", marginBottom: "5px" }}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </LayoutComponent>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}
