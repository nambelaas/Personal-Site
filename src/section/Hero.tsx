import { ArrowDown } from "lucide-react";
import { Button } from "../../components/ui/button";
import { TypographyLead } from "../components/TyphographyLead";
import { TypographyH1 } from "../components/TypographyH1";

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="h-dv py-30 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0"
      >
        <div id="left-side" className="flex flex-col gap-4">
          <div id="text-headline" className="flex flex-col text-start">
            <TypographyH1 text="Hi, I'm Salman Seif" />
            <TypographyLead text="I design interfaces and build web applications." />
          </div>
          <div id="medsos">
            <Button asChild size={"sm"} variant={"ghost"}>
              <a
                href="https://github.com/nambelaas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_910_44)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
                      fill="var(--custom-dark-color-1)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_910_44">
                      <rect
                        width="48"
                        height="48"
                        fill="var(--custom-dark-color-1)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Button>
            <Button asChild size={"sm"} variant={"ghost"}>
              <a
                href="https://www.linkedin.com/in/salman-seif/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_17_68)">
                    <path
                      d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z"
                      fill="var(--custom-dark-color-1)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_68">
                      <rect
                        width="48"
                        height="48"
                        fill="var(--custom-dark-color-1)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Button>
            <Button asChild size={"sm"} variant={"ghost"}>
              <a
                href="https://wa.me/+6285707492381"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z"
                    fill="var(--custom-dark-color-1)"
                  />
                </svg>
              </a>
            </Button>
          </div>
          <div id="cta" className="flex flex-row gap-4">
            <Button
              asChild
              size={"lg"}
              variant={"default"}
              className="bg-(--custom-dark-color-1)"
            >
              <a href="mailto:salmaniseif@gmail.com">Contact Me</a>
            </Button>
            <Button
              asChild
              size={"lg"}
              variant={"secondary"}
              className="text-(--custom-dark-color-1)"
            >
              <a
                href="https://drive.google.com/file/d/1Rgwu-Gp2q08manimzopgCfE4dFsdoQAF/view?usp=sharing"
                target="blank"
              >
                <ArrowDown />
                Download CV
              </a>
            </Button>
          </div>
        </div>
        <div id="right-side">
          <img
            src="/image/sal-img.png"
            alt="#"
            className="w-full  md:w-90 rounded-2xl mask-radial-[100%_100%] mask-radial-from-65% mask-radial-at-bottom md:mask-radial-at-right"
          />
        </div>
      </div>
    </>
  );
}
