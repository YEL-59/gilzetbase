import { NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [openAccount, setOpenAccount] = useState(false);

  // Auto-open dropdown if inside account routes
  useEffect(() => {
    if (location.pathname.startsWith("/dashboard/account")) {
      setOpenAccount(true);
    }
  }, [location.pathname]);

  const isAccountActive = location.pathname.startsWith("/dashboard/account");

  return (
    <aside className="w-64 bg-[#0b0b0b] text-white flex flex-col justify-between h-screen sticky top-0">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold text-[#d4af37]">
            AVA <span className="text-sm font-normal">Art Vision Awards</span>
          </h1>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          {/* ===== MY SUBMISSIONS ===== */}
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex gap-2 items-center px-4 py-2 rounded ${isActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
              }`
            }
          >
            <>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {" "}
                <path
                  d="M18 2.99959H17V0.499585C16.9992 0.424339 16.9816 0.350228 16.9484 0.282691C16.9152 0.215155 16.8673 0.155907 16.8082 0.109297C16.7491 0.062687 16.6804 0.0298976 16.607 0.0133353C16.5336 -0.00322692 16.4574 -0.00314156 16.384 0.0135851L3.884 3.01359C3.77757 3.04489 3.68347 3.10845 3.61469 3.1955C3.54591 3.28255 3.50584 3.3888 3.5 3.49959V21.4996C3.5 22.8776 4.621 23.9996 6 23.9996H18C19.379 23.9996 20.5 22.8776 20.5 21.4996V5.49959C20.5 4.12158 19.379 2.99959 18 2.99959ZM16 1.13359V2.99959H8.226L16 1.13359ZM19.5 21.4996C19.5 22.3266 18.827 22.9996 18 22.9996H6C5.173 22.9996 4.5 22.3266 4.5 21.4996V3.99959H18C18.827 3.99959 19.5 4.67259 19.5 5.49959V21.4996Z"
                  fill="#F3F3F3"
                />{" "}
                <path
                  d="M12.366 7.31325L12 7.63325L11.634 7.31325C10.328 6.17525 8.422 6.24525 7.297 7.47325C6.767 8.04925 6.5 8.74925 6.5 9.55425C6.5 12.2783 11.21 15.1223 11.747 15.4373C11.903 15.5293 12.097 15.5293 12.253 15.4373C12.79 15.1223 17.5 12.2773 17.5 9.55425C17.5 8.74925 17.232 8.04925 16.703 7.47325C15.578 6.24525 13.672 6.17525 12.366 7.31325ZM12 14.4223C10.54 13.5173 7.5 11.2763 7.5 9.55425C7.5 9.00025 7.675 8.54025 8.033 8.14825C8.83 7.28525 10.1 7.29825 10.976 8.06725L11.671 8.67325C11.861 8.83725 12.14 8.83725 12.329 8.67325L13.024 8.06725C13.933 7.27425 15.197 7.31025 15.967 8.14825C16.325 8.54025 16.5 9.00025 16.5 9.55425C16.5 11.2743 13.459 13.5173 12 14.4223ZM16.5 17.4993H7.5C7.36739 17.4993 7.24021 17.5519 7.14645 17.6457C7.05268 17.7395 7 17.8666 7 17.9993C7 18.1319 7.05268 18.259 7.14645 18.3528C7.24021 18.4466 7.36739 18.4993 7.5 18.4993H16.5C16.6326 18.4993 16.7598 18.4466 16.8536 18.3528C16.9473 18.259 17 18.1319 17 17.9993C17 17.8666 16.9473 17.7395 16.8536 17.6457C16.7598 17.5519 16.6326 17.4993 16.5 17.4993ZM15 19.9993H9C8.86739 19.9993 8.74021 20.0519 8.64645 20.1457C8.55268 20.2395 8.5 20.3666 8.5 20.4993C8.5 20.6319 8.55268 20.759 8.64645 20.8528C8.74021 20.9466 8.86739 20.9993 9 20.9993H15C15.1326 20.9993 15.2598 20.9466 15.3536 20.8528C15.4473 20.759 15.5 20.6319 15.5 20.4993C15.5 20.3666 15.4473 20.2395 15.3536 20.1457C15.2598 20.0519 15.1326 19.9993 15 19.9993Z"
                  fill="#F3F3F3"
                />{" "}
              </svg>{" "}
            </>
            My Submissions
          </NavLink>

          {/* ===== SUBSCRIPTION ===== */}
          <NavLink
            to="/dashboard/subscription"
            className={({ isActive }) =>
              `flex gap-2 items-center px-4 py-2 rounded ${isActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
              }`
            }
          >
            <>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {" "}
                <path
                  d="M23.671 7.06818C23.5322 6.94974 23.3619 6.87437 23.1809 6.85131C22.9999 6.82826 22.8161 6.85852 22.6521 6.93839L17.5219 9.43589L12.7082 3.88579C12.6202 3.78431 12.5114 3.70292 12.3892 3.64714C12.267 3.59137 12.1343 3.5625 12 3.5625C11.8656 3.5625 11.7329 3.59137 11.6107 3.64714C11.4885 3.70292 11.3797 3.78431 11.2917 3.88579L6.47805 9.43584L1.34786 6.93834C1.18381 6.85849 1.00003 6.82825 0.819049 6.85131C0.638066 6.87437 0.467743 6.94973 0.328959 7.06816C0.190176 7.18659 0.0889628 7.34294 0.0377275 7.51805C-0.0135079 7.69315 -0.0125391 7.8794 0.0405149 8.05397L3.60301 19.7727C3.66148 19.9651 3.78022 20.1335 3.94173 20.2532C4.10323 20.3729 4.29894 20.4375 4.49997 20.4375H19.5C19.701 20.4375 19.8967 20.3729 20.0582 20.2532C20.2197 20.1335 20.3384 19.9651 20.3969 19.7728L23.9594 8.05401C24.0125 7.87945 24.0134 7.69319 23.9622 7.51808C23.911 7.34296 23.8098 7.18661 23.671 7.06818ZM18.805 18.5625H5.1948L2.45959 9.56498L6.30437 11.4367C6.48998 11.5271 6.70023 11.5537 6.90248 11.5123C7.10474 11.471 7.28769 11.364 7.42295 11.2081L12 5.9309L16.577 11.2081C16.7123 11.364 16.8952 11.471 17.0975 11.5123C17.2997 11.5537 17.51 11.5271 17.6956 11.4367L21.5403 9.56498L18.805 18.5625Z"
                  fill="#FEFEFE"
                />{" "}
              </svg>{" "}
            </>
            Subscription plan
          </NavLink>

          {/* ===== MY ACCOUNT DROPDOWN ===== */}
          <button
            onClick={() => setOpenAccount(!openAccount)}
            className={`w-full flex items-center gap-2 px-4 py-2 rounded transition ${isAccountActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
              }`}
          >
            <span className="flex-1 flex gap-2 items-center text-left">
              {" "}
              <>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M0.648438 2.03142C0.648438 1.26762 1.26762 0.648438 2.03142 0.648438H4.79738C5.56118 0.648438 6.18037 1.26762 6.18037 2.03142V4.79738C6.18037 5.56118 5.56118 6.18037 4.79738 6.18037H2.03142C1.26762 6.18037 0.648438 5.56118 0.648438 4.79738V2.03142Z"
                    stroke="#F3F3F3"
                    stroke-width="1.29655"
                  />{" "}
                  <path
                    d="M14.4783 3.4144C14.4783 4.942 13.2399 6.18037 11.7123 6.18037C10.1847 6.18037 8.94633 4.942 8.94633 3.4144C8.94633 1.8868 10.1847 0.648438 11.7123 0.648438C13.2399 0.648438 14.4783 1.8868 14.4783 3.4144Z"
                    stroke="#F3F3F3"
                    stroke-width="1.29655"
                  />{" "}
                  <path
                    d="M6.18037 11.7123C6.18037 13.2399 4.942 14.4783 3.4144 14.4783C1.8868 14.4783 0.648438 13.2399 0.648438 11.7123C0.648438 10.1847 1.8868 8.94633 3.4144 8.94633C4.942 8.94633 6.18037 10.1847 6.18037 11.7123Z"
                    stroke="#F3F3F3"
                    stroke-width="1.29655"
                  />{" "}
                  <path
                    d="M8.94633 10.3293C8.94633 9.56551 9.56551 8.94633 10.3293 8.94633H13.0953C13.8591 8.94633 14.4783 9.56551 14.4783 10.3293V13.0953C14.4783 13.8591 13.8591 14.4783 13.0953 14.4783H10.3293C9.56551 14.4783 8.94633 13.8591 8.94633 13.0953V10.3293Z"
                    stroke="#F3F3F3"
                    stroke-width="1.29655"
                  />{" "}
                </svg>{" "}
              </>{" "}
              My Account
            </span>
            <span
              className={`transform transition ${openAccount ? "rotate-180" : ""
                }`}
            >
              ▾
            </span>
          </button>

          {/* Dropdown items */}
          {openAccount && (
            <div className="ml-4 mt-1 space-y-1 bg-white text-black rounded-md p-2">
              <NavLink
                to="/dashboard/account/profile"
                end
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm ${isActive ? "bg-[#d4af37]" : "hover:bg-gray-100"
                  }`
                }
              >
                Profile Settings
              </NavLink>

              <NavLink
                to="/dashboard/account/password"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm ${isActive ? "bg-[#d4af37]" : "hover:bg-gray-100"
                  }`
                }
              >
                Password
              </NavLink>
            </div>
          )}
        </nav>
      </div>

      {/* Bottom */}
      <div className="p-4 border-t border-white/10">
        <button className="text-red-400 text-sm">Sign Out</button>
      </div>
    </aside>
  );
}
