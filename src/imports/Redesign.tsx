import svgPaths from "./svg-uik8j3ddwi";
import imgDivEmptySpace from "figma:asset/2705201b4ba07c5335148848c7e2795118b40aee.png";

function Svg() {
  return (
    <div
      className="absolute h-[16px] left-0 top-[-2px] w-[13.72px]"
      data-name="svg"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 16"
      >
        <g id="svg">
          <path d={svgPaths.p1975d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkAnonOnly() {
  return (
    <div
      className="absolute h-[15px] left-[1367.19px] top-[12.5px] w-[61px]"
      data-name="Link [anon-only]"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[15.72px] not-italic text-[13px] text-nowrap text-white top-[7.5px] translate-y-[-50%]">
        <p className="leading-[19px] whitespace-pre">{` Sign In`}</p>
      </div>
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div
      className="absolute h-[19px] left-[15px] top-[10.09px] w-[16px]"
      data-name="svg"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 19"
      >
        <g id="svg">
          <path d={svgPaths.p942d380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanSrOnly() {
  return (
    <div
      className="absolute left-[14px] overflow-clip size-px top-[9px]"
      data-name="Span [sr-only]"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[13px] text-nowrap text-white top-[9px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Menu</p>
      </div>
    </div>
  );
}

function LinkMenuBurger() {
  return (
    <div
      className="absolute h-[40.99px] left-[10px] top-0 w-[46px]"
      data-name="Link [menu-burger]"
    >
      <Svg1 />
      <SpanSrOnly />
    </div>
  );
}

function HeaderBanner() {
  return (
    <div
      className="bg-[#3a1c1b] h-[40.99px] relative shrink-0 w-[1440px]"
      data-name="Header [banner]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40.99px] relative w-[1440px]">
        <LinkAnonOnly />
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[68px] not-italic text-[15.8px] text-nowrap text-white top-[19.53px] translate-y-[-50%]">
          <p className="leading-[16.94px] whitespace-pre">COURSES @ BROWN</p>
        </div>
        <LinkMenuBurger />
      </div>
    </div>
  );
}

function H() {
  return (
    <div
      className="absolute h-[31px] left-[12px] overflow-clip top-[12.01px] w-[322px]"
      data-name="H2"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[23.6px] text-nowrap text-white top-[12.91px] translate-y-[-50%]">
        <p className="leading-[26.18px] whitespace-pre">Course Search</p>
      </div>
    </div>
  );
}

function DivPanelHead() {
  return (
    <div
      className="bg-[#a3001c] h-[50px] relative shrink-0 w-full"
      data-name="Div [panel__head]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50px] relative w-full">
        <H />
      </div>
    </div>
  );
}

function H3SectionTitle() {
  return (
    <div
      className="bg-[#aba69a] h-[28px] relative shrink-0 w-full"
      data-name="H3 [section__title]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[7px] not-italic text-[14.2px] text-nowrap text-white top-[14.1px] translate-y-[-50%]">
          <p className="leading-[16.8px] whitespace-pre">ADVANCED SEARCH</p>
        </div>
      </div>
    </div>
  );
}

function ButtonEditMeetPatButton() {
  return (
    <div
      className="absolute bg-[#a3001c] h-[23.02px] left-[267.69px] top-0 w-[46.32px]"
      data-name="Button [edit-meet-pat-button]"
    >
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[9.31px] not-italic text-[11.8px] text-nowrap text-white top-[11.65px] translate-y-[-50%] uppercase">
        <p className="leading-[18px] whitespace-pre">edit</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute contents left-[20.66px] top-0" data-name="Label">
      <ButtonEditMeetPatButton />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[20.66px] not-italic text-[#333333] text-[12.4px] text-nowrap top-[13.4px] translate-y-[-50%]">
        <p className="leading-[25.2px] whitespace-pre">Exclude Times</p>
      </div>
    </div>
  );
}

function DivMeetPatRec() {
  return (
    <div
      className="h-[26.21px] relative shrink-0 w-[314px]"
      data-name="Div [meet-pat-rec]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.21px] relative w-[314px]">
        <Label />
        <div className="absolute left-0 size-[15px] top-[4.65px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SelectCritDept() {
  return (
    <div
      className="bg-white h-[34px] relative rounded-[4px] shrink-0 w-[314px]"
      data-name="Select [crit-dept]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[12px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[17px] translate-y-[-50%] w-[264px]">
          <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
            Any Department
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function SelectCritSubject() {
  return (
    <div
      className="bg-white h-[34px] relative rounded-[4px] shrink-0 w-[314px]"
      data-name="Select [crit-subject]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[12px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[17px] translate-y-[-50%] w-[264px]">
          <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
            Any Subject
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function SelectCritOverlap() {
  return (
    <div
      className="bg-white h-[34px] relative rounded-[4px] shrink-0 w-[314px]"
      data-name="Select [crit-overlap]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[12px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[17px] translate-y-[-50%] w-[264px]">
          <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
            Any Time
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function SelectCritHours() {
  return (
    <div
      className="bg-white h-[34px] relative rounded-[4px] shrink-0 w-[314px]"
      data-name="Select [crit-hours]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[12px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[17px] translate-y-[-50%] w-[264px]">
          <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
            Any
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function SelectCritSchd() {
  return (
    <div
      className="bg-white h-[34px] relative rounded-[4px] shrink-0 w-[314px]"
      data-name="Select [crit-schd]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[12px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[17px] translate-y-[-50%] w-[264px]">
          <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
            Any Class Schedule Type
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function InputCritInstructor() {
  return (
    <div
      className="bg-white h-[34px] relative rounded-[4px] shrink-0 w-[314px]"
      data-name="Input [crit-instructor]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] overflow-clip relative rounded-[inherit] w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[12px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[17px] translate-y-[-50%] w-[312px]">
          <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
            Instructor
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
      <div
        aria-hidden="true"
        className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
    </div>
  );
}

function Div() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[21.89px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[13px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">
            Find courses that are accessible to remote students
          </p>
        </div>
        <div className="absolute left-0 size-[15px] top-[5.44px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div
      className="absolute h-[14px] left-[129.14px] top-[2px] w-[12px]"
      data-name="svg"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 14"
      >
        <g id="svg">
          <path
            d={svgPaths.p3f050600}
            fill="var(--fill-0, #444444)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function DivGrid() {
  return (
    <div
      className="h-[19.99px] relative shrink-0 w-[314px]"
      data-name="Div [grid4]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.99px] relative w-[314px]">
        <Svg2 />
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#333333] text-[13px] text-nowrap top-[9px] translate-y-[-50%]">
          <p className="leading-[20px] whitespace-pre">{`Curricular Programs `}</p>
        </div>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[21.89px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[13px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">First Year Seminar</p>
        </div>
        <div className="absolute left-0 size-[15px] top-[5.46px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[22px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[13.47px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">Sophomore Seminar</p>
        </div>
        <div className="absolute left-0 size-[15px] top-[5.47px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[22px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[11.48px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">
            Writing - Designated Courses
          </p>
        </div>
        <div className="absolute left-0 size-[15px] top-[3.48px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[22px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[12.49px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">
            Race, Power, and Privilege
          </p>
        </div>
        <div className="absolute left-0 size-[15px] top-[4.49px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[22px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[12.5px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">
            Community-Based Learning and Research
          </p>
        </div>
        <div className="absolute left-0 size-[15px] top-[5.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[22px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[12.51px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">
            Collaborative Scholarly Experiences
          </p>
        </div>
        <div className="absolute left-0 size-[15px] top-[4.51px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DivFormGroup() {
  return (
    <div
      className="h-[167.94px] relative shrink-0 w-[314px]"
      data-name="Div [form-group]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[167.94px] items-start pb-[1299.03px] pt-0 px-0 relative w-[314px]">
          <Div1 />
          <Div2 />
          <Div3 />
          <Div4 />
          <Div5 />
          <Div6 />
        </div>
      </div>
    </div>
  );
}

function DivCritContent1() {
  return (
    <div
      className="h-[615px] relative shrink-0 w-[334px]"
      data-name="Div [crit-content-1464797400962]"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[15px] h-[615px] items-start pb-[735.938px] pt-[10px] px-[10px] relative w-[334px]">
          <DivMeetPatRec />
          <SelectCritDept />
          <SelectCritSubject />
          <SelectCritOverlap />
          <SelectCritHours />
          <SelectCritSchd />
          <InputCritInstructor />
          <Div />
          <DivGrid />
          <DivFormGroup />
        </div>
      </div>
    </div>
  );
}

function DivCritSection() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[474px] items-start left-0 pb-[279.766px] pt-0 px-0 top-[785px] w-[334px]"
      data-name="Div [crit-section-1464797400962]"
    >
      <H3SectionTitle />
      <DivCritContent1 />
    </div>
  );
}

function H3SectionTitle1() {
  return (
    <div
      className="bg-[#aba69a] h-[28px] relative shrink-0 w-full"
      data-name="H3 [section__title]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[7px] not-italic text-[14.2px] text-nowrap text-white top-[14.1px] translate-y-[-50%]">
          <p className="leading-[16.8px] whitespace-pre">CARTS</p>
        </div>
      </div>
    </div>
  );
}

function ButtonPrimaryCartButton() {
  return (
    <div
      className="bg-[#a3001c] h-[41.99px] relative shrink-0 w-[314px]"
      data-name="Button [primary-cart-button]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[41.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[91.39px] not-italic text-[14.1px] text-nowrap text-white top-[20px] translate-y-[-50%] uppercase">
          <p className="leading-[20px] whitespace-pre">MY PRIMARY CART</p>
        </div>
      </div>
    </div>
  );
}

function SelectCritOtherCarts() {
  return (
    <div
      className="bg-white h-[34px] relative rounded-[4px] shrink-0 w-[314px]"
      data-name="Select [crit-other-carts]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[34px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[12px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[17px] translate-y-[-50%] w-[264px]">
          <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
            Other Saved Carts...
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function DivCritContent3() {
  return (
    <div
      className="h-[127px] relative shrink-0 w-full"
      data-name="Div [crit-content-1527704227988]"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[15px] h-[127px] items-start pb-[728.859px] pt-[10px] px-[10px] relative w-full">
          <ButtonPrimaryCartButton />
          <SelectCritOtherCarts />
        </div>
      </div>
    </div>
  );
}

function DivCritSection2() {
  return (
    <div
      className="absolute h-[381px] left-0 top-[630px] w-[334px]"
      data-name="Div [crit-section-1527704227988]"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[381px] items-start pb-[614.875px] pt-0 px-0 relative w-[334px]">
          <H3SectionTitle1 />
          <DivCritContent3 />
        </div>
      </div>
    </div>
  );
}

function H3SectionTitle2() {
  return (
    <div
      className="bg-[#aba69a] h-[28px] relative shrink-0 w-[349px]"
      data-name="H3 [section__title]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[349px]">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[7px] not-italic text-[14.2px] text-nowrap text-white top-[14.1px] translate-y-[-50%]">
          <p className="leading-[16.8px] whitespace-pre">SUGGESTIONS</p>
        </div>
      </div>
    </div>
  );
}

function ButtonMyProgramButton() {
  return (
    <div
      className="bg-white h-[43.99px] relative shrink-0 w-[314px]"
      data-name="Button [my-program-button]"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#a10311] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[38.25px] not-italic text-[#a10311] text-[14.1px] text-nowrap top-[21px] translate-y-[-50%] uppercase">
          <p className="leading-[20px] whitespace-pre">
            COURSES IN MY CONCENTRATION
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonCoursesInAConc() {
  return (
    <div
      className="bg-[#a3001c] h-[41.99px] relative shrink-0 w-[314px]"
      data-name="Button [courses-in-a-conc]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[41.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[44.08px] not-italic text-[14.1px] text-nowrap text-white top-[20px] translate-y-[-50%] uppercase">
          <p className="leading-[20px] whitespace-pre">
            COURSES IN A CONCENTRATION
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonCoursesInAMasters() {
  return (
    <div
      className="bg-[#a3001c] h-[41.99px] relative shrink-0 w-[314px]"
      data-name="Button [courses-in-a-masters]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[41.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[32.28px] not-italic text-[14.1px] text-nowrap text-white top-[20px] translate-y-[-50%] uppercase">
          <p className="leading-[20px] whitespace-pre">
            COURSES IN A MASTERS PROGRAM
          </p>
        </div>
      </div>
    </div>
  );
}

function DivCritContent2() {
  return (
    <div
      className="h-[195px] relative shrink-0 w-full"
      data-name="Div [crit-content-1527704017846]"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[15px] h-[195px] items-start pb-[506.922px] pt-[10px] px-[10px] relative w-full">
          <ButtonMyProgramButton />
          <ButtonCoursesInAConc />
          <ButtonCoursesInAMasters />
        </div>
      </div>
    </div>
  );
}

function DivCritSection1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[490px] items-start left-0 pb-[325.953px] pt-0 px-0 top-[408px] w-[334px]"
      data-name="Div [crit-section-1527704017846]"
    >
      <H3SectionTitle2 />
      <DivCritContent2 />
    </div>
  );
}

function ButtonSearchButton() {
  return (
    <div
      className="absolute bg-[#a3001c] h-[41.99px] left-[10px] top-[339.94px] w-[314px]"
      data-name="Button [search-button]"
    >
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[104.09px] not-italic text-[14.1px] text-nowrap text-white top-[20px] translate-y-[-50%] uppercase">
        <p className="leading-[20px] whitespace-pre">FIND COURSES</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div
      className="absolute h-[14px] left-[131.16px] top-[5px] w-[12px]"
      data-name="svg"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 14"
      >
        <g id="svg">
          <path
            d={svgPaths.p3f050600}
            fill="var(--fill-0, #444444)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Div7() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <Svg3 />
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16.89px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[13px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">Courses I Can Take</p>
        </div>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16.89px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[13px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">{`Don't Allow Overlap With Courses In Cart`}</p>
        </div>
        <div className="absolute left-[-2px] size-[15px] top-[4.54px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-[314px]" data-name="Div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27.99px] relative w-[314px]">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16.89px] not-italic text-[#333333] text-[11.6px] text-nowrap top-[13px] translate-y-[-50%]">
          <p className="leading-[18px] whitespace-pre">
            Include Cancelled Courses
          </p>
        </div>
        <div className="absolute left-[-2px] size-[15px] top-[4.55px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15 15"
          >
            <path
              d={svgPaths.p14e36f00}
              fill="var(--fill-0, white)"
              id="Rectangle 1"
              stroke="var(--stroke-0, #858585)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DivFormGroup1() {
  return (
    <div
      className="absolute h-[83.97px] left-[10px] top-[240.98px] w-[314px]"
      data-name="Div [form-group]"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[83.97px] items-start pb-[303.984px] pt-0 px-0 relative w-[314px]">
          <Div7 />
          <Div8 />
          <Div9 />
        </div>
      </div>
    </div>
  );
}

function SelectCritCamp() {
  return (
    <div
      className="absolute bg-white border border-[#cccccc] border-solid h-[34px] left-[10px] rounded-[4px] top-[191.98px] w-[314px]"
      data-name="Select [crit-camp]"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[11px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[16px] translate-y-[-50%] w-[264px]">
        <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
          All Modes of Instruction
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function SelectCritCoursetype() {
  return (
    <div
      className="absolute bg-white border border-[#cccccc] border-solid h-[34px] left-[10px] rounded-[4px] top-[142.98px] w-[314px]"
      data-name="Select [crit-coursetype]"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[11px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[16px] translate-y-[-50%] w-[264px]">
        <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
          All Courses
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function SelectCritSrcdb() {
  return (
    <div
      className="absolute bg-white border border-[#cccccc] border-solid h-[34px] left-[10px] rounded-[4px] top-[93.98px] w-[314px]"
      data-name="Select [crit-srcdb]"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[11px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[16px] translate-y-[-50%] w-[264px]">
        <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
          Fall 2025
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function InputCritKeyword() {
  return (
    <div
      className="absolute bg-white border border-[#66afe9] border-solid h-[34px] left-[10px] overflow-clip rounded-[4px] shadow-[0px_0px_8px_0px_rgba(102,175,233,0.6)] top-[10px] w-[314px]"
      data-name="Input [crit-keyword]"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.8px] justify-center leading-[0] left-[11px] not-italic overflow-ellipsis overflow-hidden text-[#555555] text-[12.9px] text-nowrap top-[16px] translate-y-[-50%] w-[312px]">
        <p className="[white-space-collapse:collapse] leading-[16.8px] overflow-ellipsis overflow-hidden">
          title, tag, subject, CRN or keyword
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1px_0px_inset_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function DivCritContent() {
  return (
    <div
      className="absolute h-[408px] left-0 top-0 w-[332px]"
      data-name="Div [crit-content-1464624409188]"
    >
      <ButtonSearchButton />
      <DivFormGroup1 />
      <SelectCritCamp />
      <SelectCritCoursetype />
      <SelectCritSrcdb />
      <InputCritKeyword />
      <div className="absolute left-[8px] size-[15px] top-[246.01px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15 15"
        >
          <path
            d={svgPaths.p14e36f00}
            fill="var(--fill-0, white)"
            id="Rectangle 1"
            stroke="var(--stroke-0, #858585)"
          />
        </svg>
      </div>
    </div>
  );
}

function FormSearchForm() {
  return (
    <div
      className="absolute h-[1430px] left-0 top-[0.01px] w-[332px]"
      data-name="Form [search-form]"
    >
      <DivCritSection />
      <DivCritSection2 />
      <DivCritSection1 />
      <DivCritContent />
    </div>
  );
}

function DivPanelBody() {
  return (
    <div
      className="h-[1428px] relative shrink-0 w-full"
      data-name="Div [panel__body]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1428px] relative w-full">
        <FormSearchForm />
      </div>
    </div>
  );
}

function DivPanelContent() {
  return (
    <div
      className="bg-[#eeece7] h-[718px] shrink-0 sticky top-0 w-[334px]"
      data-name="Div [panel__content]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[718px] items-start overflow-x-clip overflow-y-auto relative w-[334px]">
        <DivPanelHead />
        <DivPanelBody />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#f4f4f4] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function DivGlassContent() {
  return (
    <div
      className="absolute h-[106.16px] leading-[0] left-[20px] not-italic text-nowrap top-[20px] w-[1010px]"
      data-name="Div [glass__content]"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[#dddddd] text-[13px] top-[95.17px] translate-y-[-50%]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[20px] text-nowrap underline whitespace-pre">
          Supported systems
        </p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[13px] text-white top-[65.19px] translate-y-[-50%]">
        <p className="leading-[20px] text-nowrap whitespace-pre">
          <span>{`Please visit our brief `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#dddddd] underline">
            tutorial
          </span>
          <span>{` for information on using this site.`}</span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center left-0 text-[39.9px] text-white top-[22.9px] translate-y-[-50%]">
        <p className="leading-[46.2px] text-nowrap whitespace-pre">
          Welcome to Courses @ Brown
        </p>
      </div>
    </div>
  );
}

function DivGlass() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.6)] h-[146.16px] relative shrink-0 w-[1050px]"
      data-name="Div [glass]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[146.16px] relative w-[1050px]">
        <DivGlassContent />
      </div>
    </div>
  );
}

function LinkPromotedItem() {
  return (
    <div
      className="absolute bg-[#eeece7] h-[86px] left-[515px] top-[215.37px] w-[495px]"
      data-name="Link [promoted__item]"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2.234px] h-[86px] items-start leading-[0] not-italic pb-[755.031px] pl-[20px] pr-[277.032px] pt-[19px] relative text-[#444444] text-nowrap w-[495px]">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18.5px]">
            <p className="leading-[28px] text-nowrap whitespace-pre">
              TAPS 0030 (Fall 2025)
            </p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12.1px]">
            <p className="leading-[17.5px] text-nowrap whitespace-pre">
              Introduction to Acting and Directing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkPromotedItem1() {
  return (
    <div
      className="absolute bg-[#eeece7] h-[86px] left-0 top-[215.37px] w-[495px]"
      data-name="Link [promoted__item]"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2.234px] h-[86px] items-start leading-[0] not-italic pb-[755.031px] pl-[20px] pr-[269.063px] pt-[19px] relative text-[#444444] text-nowrap w-[495px]">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18.5px]">
            <p className="leading-[28px] text-nowrap whitespace-pre">
              MUSC 0630 (Fall 2025)
            </p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12.1px]">
            <p className="leading-[17.5px] text-nowrap whitespace-pre">
              Jazz Band
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkPromotedItem2() {
  return (
    <div
      className="absolute bg-[#eeece7] h-[86px] left-[515px] top-[107.37px] w-[495px]"
      data-name="Link [promoted__item]"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2.234px] h-[86px] items-start leading-[0] not-italic pb-[647.563px] pl-[20px] pr-[158.282px] pt-[19px] relative text-[#444444] text-nowrap w-[495px]">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18.5px]">
            <p className="leading-[28px] text-nowrap whitespace-pre">
              IAPA 1802D (Fall 2025)
            </p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12.1px]">
            <p className="leading-[17.5px] text-nowrap whitespace-pre">
              The Environmental Movement in Comparative Perspective
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkPromotedItem3() {
  return (
    <div
      className="absolute bg-[#eeece7] h-[86px] left-0 top-[107.37px] w-[495px]"
      data-name="Link [promoted__item]"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2.234px] h-[86px] items-start leading-[0] not-italic pb-[647.563px] pl-[20px] pr-[269.063px] pt-[19px] relative text-[#444444] text-nowrap w-[495px]">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18.5px]">
            <p className="leading-[28px] text-nowrap whitespace-pre">
              MUSC 0630 (Fall 2025)
            </p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12.1px]">
            <p className="leading-[17.5px] text-nowrap whitespace-pre">
              Jazz Band
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkPromotedItem4() {
  return (
    <div
      className="absolute bg-[#eeece7] h-[79px] left-[515px] top-[0.37px] w-[495px]"
      data-name="Link [promoted__item]"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2.234px] h-[79px] items-start leading-[0] not-italic pb-[540.094px] pl-[20px] pr-[272.313px] pt-[19px] relative text-[#444444] text-nowrap w-[495px]">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18.5px]">
            <p className="leading-[28px] text-nowrap whitespace-pre">
              BHBR 0100 (Fall 2025)
            </p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12.1px]">
            <p className="leading-[17.5px] text-nowrap whitespace-pre">
              Introduction to Biblical Hebrew
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkPromotedItem5() {
  return (
    <div
      className="absolute bg-[#eeece7] h-[86px] left-0 top-[0.37px] w-[495px]"
      data-name="Link [promoted__item]"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2.234px] h-[86px] items-start leading-[0] not-italic pb-[540.094px] pl-[20px] pr-[185.985px] pt-[19px] relative text-[#444444] text-nowrap w-[495px]">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18.5px]">
            <p className="leading-[28px] text-nowrap whitespace-pre">
              EEPS 1670 (Fall 2025)
            </p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12.1px]">
            <p className="leading-[17.5px] text-nowrap whitespace-pre">{`Time Series Analysis & Modeling in Climate Sciences`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivPromotedContent() {
  return (
    <div
      className="absolute h-[322.41px] left-[20px] top-[53.47px] w-[1010px]"
      data-name="Div [promoted__content]"
    >
      <LinkPromotedItem />
      <LinkPromotedItem1 />
      <LinkPromotedItem2 />
      <LinkPromotedItem3 />
      <LinkPromotedItem4 />
      <LinkPromotedItem5 />
    </div>
  );
}

function LinkPromotedShowAll() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.2)] h-[33.47px] left-[983.02px] top-0 w-[66.99px]"
      data-name="Link [promoted__show-all]"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[10px] not-italic text-[11.3px] text-nowrap text-white top-[16.26px] translate-y-[-50%]">
        <p className="leading-[13.475px] whitespace-pre">Show All</p>
      </div>
    </div>
  );
}

function H3PromotedHeader() {
  return (
    <div
      className="absolute bg-[rgba(163,0,28,0.7)] h-[33.47px] left-0 top-0 w-[1050px]"
      data-name="H3 [promoted__header]"
    >
      <LinkPromotedShowAll />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[10px] not-italic text-[11.3px] text-nowrap text-white top-[16.26px] translate-y-[-50%]">
        <p className="leading-[13.475px] whitespace-pre">{`Have you Considered? `}</p>
      </div>
    </div>
  );
}

function DivPromoted() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.6)] h-[375.88px] relative shrink-0 w-[1050px]"
      data-name="Div [promoted]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[375.88px] relative w-[1050px]">
        <DivPromotedContent />
        <H3PromotedHeader />
      </div>
    </div>
  );
}

function DivEmptySpaceContent() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[20px] h-[718px] items-start left-0 pb-0 pt-[150px] px-[20px] top-[0.01px] w-[1090px]"
      data-name="Div [empty-space__content]"
    >
      <DivGlass />
      <DivPromoted />
    </div>
  );
}

function DivEmptySpace() {
  return (
    <div
      className="h-[718px] relative shrink-0 w-[1154px]"
      data-name="Div [empty-space]"
    >
      <img
        alt=""
        className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgDivEmptySpace}
      />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[718px] overflow-clip relative rounded-[inherit] w-[1154px]">
        <DivEmptySpaceContent />
      </div>
    </div>
  );
}

function MainPanels() {
  return (
    <div
      className="h-[718px] relative shrink-0 w-[1440px]"
      data-name="Main [panels]"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[718px] items-start relative w-[1440px]">
        <DivPanelContent />
        <DivEmptySpace />
      </div>
    </div>
  );
}

function BodyUserAnon() {
  return (
    <div
      className="absolute bg-white content-stretch flex flex-col h-[759px] items-start left-0 top-px w-[1440px]"
      data-name="Body [user-anon]"
    >
      <HeaderBanner />
      <MainPanels />
    </div>
  );
}

function Screen() {
  return (
    <div
      className="absolute h-[760px] left-[209px] top-[297.5px] w-[1440px]"
      data-name="Screen"
    >
      <BodyUserAnon />
    </div>
  );
}

export default function Redesign() {
  return (
    <div
      className="bg-neutral-700 border border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[2px] size-full"
      data-name="Redesign"
    >
      <Screen />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[199px] not-italic text-[40px] text-nowrap text-white top-[149px] whitespace-pre">{`Redesign `}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-[199px] not-italic text-[24px] text-nowrap text-white top-[99px] whitespace-pre">
        https://cab.brown.edu/
      </p>
    </div>
  );
}
