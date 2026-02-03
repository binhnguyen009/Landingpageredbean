import svgPaths from "./svg-7zkbgx3csx";

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start leading-[normal] left-[15px] text-center top-[221px] w-[345px] whitespace-pre-wrap">
      <div className="font-['Lexend_Deca:SemiBold',sans-serif] font-semibold relative shrink-0 text-[24px] text-white w-full">
        <p className="mb-0">Thank for completing</p>
        <p>this form!</p>
      </div>
      <p className="font-['Lexend_Deca:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">
        Make with Tally, the simplest
        <br aria-hidden="true" />
        way to create forms for free.
      </p>
    </div>
  );
}

function Fi() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] overflow-clip size-[70px] top-[124px]" data-name="fi_5610944">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
        <g id="å¾å±_x0020_1">
          <path d={svgPaths.pc5ad0f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pbd8e2f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 absolute h-[59px] left-[calc(50%+0.5px)] top-[356px] w-[344px]" data-name="Button">
      <div className="absolute inset-[-1.69%_-0.79%_-3.39%_0]" style={{ backgroundImage: "linear-gradient(108.429deg, rgb(255, 253, 64) 0%, rgb(255, 255, 200) 100%)" }} />
      <div className="absolute flex inset-[5.08%_0.32%_5.03%_1.15%] items-center justify-center">
        <div className="flex-none h-[52.134px] rotate-[-0.15deg] skew-x-[0.13deg] w-[338.671px]">
          <div className="relative size-full" data-name="BG">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 338.671 52.1337">
              <path d={svgPaths.p2c9e5c80} fill="var(--fill-0, #F5E401)" id="BG" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[22.95%_9.76%_26.2%_8.75%] items-center justify-center">
        <div className="flex-none h-[30px] skew-x-[0.64deg] w-[280px]">
          <p className="bg-clip-text bg-gradient-to-b font-['Lexend_Deca:Black',sans-serif] font-black from-[#000119] leading-[normal] relative text-[24px] text-center to-[#36426c]" style={{ WebkitTextFillColor: "transparent" }}>
            Create your own form
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#a60f19] relative size-full">
      <Frame1 />
      <Fi />
      <Button />
    </div>
  );
}