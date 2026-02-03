import svgPaths from "./svg-qhb00tmyl4";

function Fi() {
  return (
    <div className="overflow-clip relative shrink-0 size-[70px]" data-name="fi_5610944">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
        <g id="å¾å±_x0020_1">
          <path d={svgPaths.pc5ad0f0} fill="var(--fill-0, white)" fillOpacity="0.2" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pbd8e2f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start leading-[normal] relative shrink-0 text-center w-full whitespace-pre-wrap">
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

function Button({ onClose }: { onClose: () => void }) {
  const handleClick = () => {
    onClose();
  };

  return (
    <div
      className="h-[59px] relative shrink-0 w-[344px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
      data-name="Button"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className="absolute inset-[-1.69%_-0.79%_-3.39%_0]" style={{ backgroundImage: "linear-gradient(108.429deg, rgb(255, 255, 255) 0%, rgb(255, 255, 118) 100%)" }} />
      <div className="absolute flex inset-[5.08%_0.32%_5.03%_1.15%] items-center justify-center">
        <div className="flex-none h-[52.134px] rotate-[-0.15deg] skew-x-[0.13deg] w-[338.671px]">
          <div className="relative size-full" data-name="BG">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 338.671 52.1337">
              <path d={svgPaths.p2c9e5c80} fill="var(--fill-0, #FFFEEC)" id="BG" />
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

function Frame1({ onClose }: { onClose: () => void }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[28px] items-center left-1/2 top-[calc(50%+0.5px)] w-[345px]">
      <Fi />
      <Frame />
      <Button onClose={onClose} />
    </div>
  );
}

export default function Popup({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#a60f19] relative size-full" data-name="popup">
      <Frame1 onClose={onClose} />
    </div>
  );
}