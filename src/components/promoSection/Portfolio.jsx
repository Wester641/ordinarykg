import { callouts } from "../../constans/promoSection";
import Button from "../../ui/Button";

export default function Portfolio() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl sm:py-24 lg:max-w-none lg:pb-32  lg:pt-5">
          <h2 className="text-3xl font-bold text-gray-900 text-center   ">
            Портфолио
          </h2>

          <div className="mt-6  space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:space-y-0 lg:gap-3  lg:pb-10">
            {callouts.slice(0, 3).map((callout) => (
              <div
                key={callout.name}
                className="group relative  ring-offset-slate-100 flex flex-col items-center justify-center border border-[#d9d9d9]"
              >
                <div className="flex items-center text-[20px]  justify-center flex-col w-full bg-green text-[#fff]">
                  <h3 className="font-semibold  text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0 " />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="  text-gray-900">{callout.description}</p>
                </div>
                <div>
                  <div className="relative flex items-center h-80 w-full overflow-hidden rounded-lg bg-[#fff] sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                    <img
                      src={
                        callout.imageOrg ? callout.imageOrg : callout.imageSrc
                      }
                      alt={callout.imageAlt}
                      className="w-full h-full object-contain "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button name="Посмотреть все работы" />
        </div>
      </div>
    </section>
  );
}
