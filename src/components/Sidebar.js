function Sidebar({ items }) {
  const renderItems = () => {
    return (
      <>
        {items.map((item) => {
          const formDefinition = JSON.parse(item.formDefinition);
          const dispayText = formDefinition.title || `Form ${item.id}`;
          console.log(formDefinition);
          return (
            <a
              href={`/${item.id}/bipin.pandey@coforge.com`}
              className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
            >
              <span>{dispayText}</span>
            </a>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-white"></div>
      <div className="bg-white">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-gray-200"></div>
          <div className="flex bg-gray-100 overflow-x-hidden">
            <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
              <div className="flex-col pt-5 flex overflow-y-auto">
                <div className="h-full flex-col justify-between px-4 flex">
                  <div className="space-y-4">
                    <div className="bg-top bg-cover space-y-1">
                      {renderItems()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
