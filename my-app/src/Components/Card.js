import React from "react";


const Card = ({ feedback, occupation, src, name }) => {
    return <>
        <div className="shadow-xl flex flex-col rounded-3xl  border-gray-400 border-[0.1px]  w-[22rem] md:w-[25rem] m-3 p-5 border-solid h-auto">
            <div className="">
                <svg className="mr-10" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.79169 5.83333C3.66161 5.83333 3.53677 5.85316 3.41252 5.87125C3.45277 5.73591 3.49419 5.59825 3.56069 5.47458C3.62719 5.29491 3.73102 5.13916 3.83427 4.98225C3.92061 4.8125 4.07286 4.69758 4.18486 4.55233C4.30211 4.41116 4.46194 4.31725 4.58852 4.2C4.71277 4.0775 4.87552 4.01625 5.00502 3.92991C5.14036 3.85233 5.25819 3.76658 5.38419 3.72575L5.69861 3.59625L5.97511 3.48133L5.69219 2.35083L5.34394 2.43483C5.23252 2.46283 5.09661 2.4955 4.94202 2.53458C4.78394 2.56375 4.61536 2.64366 4.42752 2.71658C4.24202 2.79941 4.02736 2.85541 3.82786 2.98841C3.62719 3.11558 3.39561 3.22175 3.19144 3.39208C2.99369 3.56766 2.75511 3.71991 2.57894 3.94333C2.38644 4.15216 2.19627 4.3715 2.04869 4.62116C1.87777 4.85916 1.76169 5.1205 1.63919 5.37891C1.52836 5.63733 1.43911 5.90158 1.36619 6.15825C1.22794 6.67275 1.16611 7.16158 1.14219 7.57983C1.12236 7.99866 1.13402 8.34691 1.15852 8.59891C1.16727 8.71791 1.18361 8.83341 1.19527 8.91333L1.20986 9.01133L1.22502 9.00783C1.32878 9.49248 1.56762 9.93786 1.91392 10.2924C2.26022 10.647 2.69983 10.8963 3.1819 11.0115C3.66396 11.1266 4.16878 11.103 4.63796 10.9432C5.10714 10.7835 5.52151 10.4942 5.83313 10.1087C6.14475 9.72333 6.34088 9.25757 6.39885 8.76534C6.45682 8.27311 6.37424 7.77452 6.16068 7.32726C5.94712 6.88 5.6113 6.50233 5.19207 6.23796C4.77284 5.97358 4.28732 5.8333 3.79169 5.83333V5.83333ZM10.2084 5.83333C10.0783 5.83333 9.95344 5.85316 9.82919 5.87125C9.86944 5.73591 9.91086 5.59825 9.97736 5.47458C10.0439 5.29491 10.1477 5.13916 10.2509 4.98225C10.3373 4.8125 10.4895 4.69758 10.6015 4.55233C10.7188 4.41116 10.8786 4.31725 11.0052 4.2C11.1294 4.0775 11.2922 4.01625 11.4217 3.92991C11.557 3.85233 11.6749 3.76658 11.8009 3.72575L12.1153 3.59625L12.3918 3.48133L12.1089 2.35083L11.7606 2.43483C11.6492 2.46283 11.5133 2.4955 11.3587 2.53458C11.2006 2.56375 11.032 2.64366 10.8442 2.71658C10.6593 2.8 10.444 2.85541 10.2445 2.989C10.0439 3.11616 9.81227 3.22233 9.60811 3.39266C9.41036 3.56825 9.17177 3.7205 8.99561 3.94333C8.80311 4.15216 8.61294 4.3715 8.46536 4.62116C8.29444 4.85916 8.17836 5.1205 8.05586 5.37891C7.94502 5.63733 7.85577 5.90158 7.78286 6.15825C7.64461 6.67275 7.58277 7.16158 7.55886 7.57983C7.53902 7.99866 7.55069 8.34691 7.57519 8.59891C7.58394 8.71791 7.60027 8.83341 7.61194 8.91333L7.62652 9.01133L7.64169 9.00783C7.74544 9.49248 7.98428 9.93786 8.33059 10.2924C8.67689 10.647 9.1165 10.8963 9.59856 11.0115C10.0806 11.1266 10.5854 11.103 11.0546 10.9432C11.5238 10.7835 11.9382 10.4942 12.2498 10.1087C12.5614 9.72333 12.7576 9.25757 12.8155 8.76534C12.8735 8.27311 12.7909 7.77452 12.5774 7.32726C12.3638 6.88 12.028 6.50233 11.6087 6.23796C11.1895 5.97358 10.704 5.8333 10.2084 5.83333V5.83333Z" fill="#068353" />
                </svg>
                <p className="pl-5 text-xs font-semibold">
                    {feedback}
                </p>
                <svg className="ml-[18rem] md:ml-[21.5rem] " width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8042 5.08727L12.7896 4.98927L12.7744 4.99277C12.6708 4.50804 12.432 4.06257 12.0857 3.70789C11.7394 3.35322 11.2998 3.10383 10.8177 2.9886C10.3356 2.87337 9.83068 2.897 9.36144 3.05675C8.8922 3.2165 8.47779 3.50585 8.16614 3.89132C7.8545 4.27678 7.65836 4.74261 7.60043 5.2349C7.5425 5.72719 7.62514 6.22582 7.83879 6.6731C8.05243 7.12038 8.38836 7.49803 8.80769 7.76235C9.22703 8.02667 9.71264 8.16685 10.2083 8.16669C10.3384 8.16669 10.4632 8.14685 10.5875 8.12877C10.5472 8.2641 10.5058 8.40177 10.4393 8.52544C10.3728 8.7051 10.269 8.86085 10.1657 9.01777C10.0794 9.18752 9.92716 9.30244 9.81516 9.44769C9.69791 9.58885 9.53807 9.68277 9.41149 9.80002C9.28724 9.92252 9.12449 9.98377 8.99499 10.0701C8.85966 10.1477 8.74182 10.2334 8.61582 10.2743L8.30141 10.4038L8.02491 10.5187L8.30724 11.6498L8.65549 11.5658C8.76691 11.5378 8.90282 11.5051 9.05741 11.466C9.21549 11.4369 9.38407 11.3569 9.57191 11.284C9.75682 11.2006 9.97207 11.1452 10.1716 11.0116C10.3722 10.8844 10.6038 10.7783 10.808 10.6079C11.0057 10.4324 11.2443 10.2801 11.4205 10.0573C11.613 9.84844 11.8032 9.6291 11.9507 9.37944C12.1217 9.14144 12.2377 8.8801 12.3602 8.62169C12.4711 8.36327 12.5603 8.09902 12.6332 7.84235C12.7715 7.32785 12.8333 6.83902 12.8572 6.42077C12.8771 6.00194 12.8654 5.65369 12.8409 5.40169C12.8327 5.29645 12.8204 5.19156 12.8042 5.08727ZM6.38749 5.08727L6.37291 4.98927L6.35774 4.99277C6.25409 4.50804 6.0153 4.06257 5.66902 3.70789C5.32274 3.35322 4.88311 3.10383 4.401 2.9886C3.9189 2.87337 3.41401 2.897 2.94478 3.05675C2.47554 3.2165 2.06112 3.50585 1.74947 3.89132C1.43783 4.27678 1.24169 4.74261 1.18376 5.2349C1.12583 5.72719 1.20847 6.22582 1.42212 6.6731C1.63577 7.12038 1.97169 7.49803 2.39103 7.76235C2.81036 8.02667 3.29597 8.16685 3.79166 8.16669C3.92174 8.16669 4.04657 8.14685 4.17082 8.12877C4.13057 8.2641 4.08916 8.40177 4.02266 8.52544C3.95616 8.7051 3.85232 8.86085 3.74907 9.01777C3.66274 9.18752 3.51049 9.30244 3.39849 9.44769C3.28124 9.58885 3.12141 9.68277 2.99482 9.80002C2.87057 9.92252 2.70782 9.98377 2.57832 10.0701C2.44299 10.1477 2.32516 10.2334 2.19916 10.2743L1.88474 10.4038C1.70916 10.4755 1.60882 10.5175 1.60882 10.5175L1.89116 11.6486L2.23941 11.5646C2.35082 11.5366 2.48674 11.5039 2.64132 11.4649C2.79941 11.4357 2.96799 11.3558 3.15582 11.2829C3.34074 11.1994 3.55599 11.144 3.75549 11.0104C3.95616 10.8833 4.18774 10.7771 4.39191 10.6068C4.58966 10.4312 4.82824 10.2789 5.00441 10.0561C5.19691 9.84727 5.38707 9.62794 5.53466 9.37827C5.70557 9.14027 5.82166 8.87894 5.94416 8.62052C6.05499 8.3621 6.14424 8.09785 6.21716 7.84119C6.35541 7.32669 6.41724 6.83785 6.44116 6.4196C6.46099 6.00077 6.44932 5.65252 6.42482 5.40052C6.41611 5.29569 6.40366 5.19121 6.38749 5.08727Z" fill="#068353" />
                </svg>
            </div>
            <div className=" border-black border-t-[1px] flex flex-row space-x-3 p-3 items-center mt-5">
                <img src={src} alt="avatar" className="w-12" />
                <div className="flex flex-col ">
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <h4 className="font-md">{occupation}</h4>
                </div>
            </div>
        </div>
    </>
};

export default Card;