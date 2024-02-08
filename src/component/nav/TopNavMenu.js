import React from "react";
import SignUp from "../modal/SignUp";
import SignIn from "../modal/SignIn";
function TopNavMenu (){
    const handleChatOpen = () =>{
        const bodyElements = document.querySelector('.chat');
    bodyElements.classList.add('open');
    };
    const closeChat = () => {
        const chatElement = document.querySelector('.chat');
        chatElement.classList.remove('open');
    };

    const handleOpenSignUp = () => {
    
    }

    return(
            <div className="top-nav">
            <div className="container">
            <div className="top-menu">
                    
                       <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.43103 2.9834C7.80526 3.08767 8.14511 3.28347 8.39971 3.54142C8.70063 3.84636 15.3249 12.0899 15.4817 12.3546C15.668 12.669 15.7485 12.9325 15.7771 13.321L15.7993 13.6214L16.0887 13.4482C16.5527 13.1705 16.7576 12.9042 16.859 12.4471C16.8891 12.3111 16.9087 12.1248 16.9026 12.0332C16.8762 11.6434 16.9416 11.7603 13.9654 6.7868C12.1224 3.70694 11.1433 2.09447 11.0455 1.97814C10.9646 1.88187 10.8242 1.75186 10.7335 1.68925C10.5407 1.55626 10.1356 1.43312 9.89864 1.43553C9.53193 1.43923 9.44264 1.48053 8.2209 2.21174L7.09025 2.88843L7.43103 2.9834ZM3.21825 6.09687C0.724944 8.11524 0.541041 8.27015 0.413803 8.45861C0.113979 8.90277 0.0761168 9.47364 0.3163 9.92857C0.417208 10.1196 1.1039 10.9867 3.83291 14.3688C5.69809 16.6803 7.27315 18.6233 7.33302 18.6866C7.61863 18.9885 8.09309 19.1544 8.54034 19.1088C8.93714 19.0683 9.10124 18.9672 10.175 18.1007C14.5774 14.5482 14.6594 14.4804 14.7862 14.2908C15.0788 13.8535 15.1218 13.2727 14.8948 12.8244C14.7978 12.6329 14.2032 11.8815 11.3972 8.4048C9.53778 6.10096 7.96426 4.15936 7.90047 4.09017C7.59668 3.76056 7.13689 3.59077 6.66981 3.63571C6.19628 3.68131 6.24576 3.64599 3.21825 6.09687ZM11.6089 1.4892C11.664 1.55081 13.0002 3.75698 14.5781 6.39187C17.1681 10.7165 17.4548 11.2061 17.5264 11.4252C17.8618 12.452 17.4578 13.491 16.4847 14.1049C16.3405 14.1959 16.5594 14.1149 17.3793 13.774C18.7218 13.2158 18.8907 13.1169 19.1271 12.7499C19.3652 12.3805 19.4329 11.9069 19.3034 11.5171C19.2767 11.4368 18.3093 9.13244 17.1537 6.39623C15.4533 2.37023 15.0239 1.37891 14.9022 1.19889C14.6134 0.771735 14.093 0.53608 13.5586 0.590598C13.349 0.611985 13.1891 0.668421 12.4161 0.993739C11.9217 1.20179 11.5153 1.37319 11.5129 1.37464C11.5105 1.37607 11.5537 1.4276 11.6089 1.4892ZM1.75255 8.77673C1.72239 8.82769 1.69958 8.90779 1.70184 8.95476C1.70814 9.08592 1.97739 10.2867 2.01436 10.3485C2.07683 10.4529 2.2479 10.5278 2.38016 10.5087C2.65695 10.4687 2.73439 10.2807 2.64855 9.85719L2.593 9.58323L2.85844 9.70426C3.00444 9.77083 3.16605 9.82056 3.21759 9.81477C3.50353 9.78269 3.64876 9.49548 3.50255 9.25117C3.47162 9.1995 3.36644 9.12485 3.24577 9.06895C2.47865 8.7136 2.20637 8.59805 2.106 8.58519C1.97269 8.56817 1.8303 8.64529 1.75255 8.77673ZM7.0538 9.38662C6.90208 9.53837 6.75373 9.79779 6.7029 10.0002L6.65588 10.1874L6.40282 10.2132C5.64627 10.2903 5.12514 10.9686 5.24025 11.7263C5.25831 11.8451 5.31128 11.969 5.42602 12.1607C5.57029 12.4018 5.60783 12.4427 5.79737 12.5657C5.91333 12.641 6.0657 12.7198 6.13593 12.7409C6.32781 12.7985 8.2513 12.9998 8.42588 12.9806C8.64024 12.957 8.8002 12.8518 8.93 12.6488C9.03069 12.4915 9.04967 12.3842 9.15662 11.3669C9.27444 10.2462 9.27266 10.1074 9.13635 9.7723C8.94077 9.29148 8.29227 8.94811 7.75861 9.04274C7.52246 9.0846 7.19688 9.24344 7.0538 9.38662ZM12.532 12.4708C12.5089 12.5402 12.5165 12.6946 12.5515 12.867L12.6088 13.1495L12.3277 13.0302C11.93 12.8616 11.7395 12.9096 11.6674 13.1967C11.6352 13.3248 11.6411 13.3826 11.6955 13.4735C11.754 13.5713 11.8594 13.6317 12.4071 13.8813C13.0975 14.1959 13.2198 14.2211 13.3772 14.0817C13.5214 13.9541 13.5188 13.7927 13.361 13.0792C13.1989 12.346 13.1644 12.278 12.9348 12.2409C12.7587 12.2125 12.5848 12.3117 12.532 12.4708Z" fill="#98A7B5"/>
                            </svg>
                        </span> 
                        Casino</a></li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00128 0.025284C6.45728 0.0760148 5.83169 0.207106 5.31315 0.379052L5.0306 0.472747L5.14405 0.529457C5.74555 0.830178 6.5059 1.27582 7.14248 1.70078L7.53277 1.96135L7.71934 1.79755C7.95216 1.59313 8.26551 1.24338 8.33734 1.10775C8.3823 1.02284 8.39355 0.921353 8.4027 0.518818L8.41377 0.0324642L8.18667 0.013268C7.90087 -0.0108812 7.32688 -0.00507835 7.00128 0.025284ZM9.16978 0.469758C9.16943 1.01086 9.09077 1.35243 8.90403 1.62388C8.85107 1.70084 8.66286 1.91337 8.48578 2.09616C8.30428 2.28352 8.17554 2.43882 8.19066 2.45213C8.20543 2.46511 8.3692 2.60154 8.55457 2.75531C8.73993 2.90909 8.94558 3.08194 9.01158 3.13941L9.1316 3.24395L9.52446 3.00612C10.0042 2.71578 10.7128 2.35114 11.0365 2.22805C11.3013 2.12738 11.8113 1.99013 12.2599 1.89881C12.42 1.86622 12.5555 1.83504 12.561 1.82953C12.5757 1.81481 12.2936 1.57983 12.0568 1.40961C11.2359 0.819511 10.3455 0.422632 9.25061 0.158896L9.17002 0.139494L9.16978 0.469758ZM3.8344 1.05801C2.76495 1.70746 1.88719 2.58683 1.24419 3.65302C1.04446 3.98425 0.837436 4.39063 0.858009 4.41117C0.866245 4.41941 0.984177 4.38588 1.1201 4.3367C1.6484 4.14553 2.28586 3.99284 3.65398 3.72969C4.90731 3.48864 5.18678 3.40649 5.84364 3.0861C6.21576 2.9046 6.88405 2.49914 6.88405 2.45491C6.88405 2.42408 6.15454 1.95156 5.71176 1.69556C5.29167 1.45269 4.26753 0.941341 4.15848 0.920005C4.10564 0.909689 4.01531 0.94814 3.8344 1.05801ZM13.1705 2.50585C12.5321 2.59207 11.6836 2.78573 11.2955 2.93376C10.9963 3.04789 10.5056 3.29908 10.0515 3.57061L9.69427 3.7842L9.83776 3.93332C10.0801 4.18518 10.3791 4.53969 10.5592 4.78883L10.7309 5.0263L10.9451 4.95825C11.4104 4.81048 11.7365 4.75937 12.218 4.75867C12.6404 4.75805 12.6887 4.76374 12.9067 4.8397C13.5124 5.0508 14.1986 5.55292 14.8416 6.25565C15.0732 6.50866 15.1224 6.55043 15.1085 6.48182C15.0992 6.43557 15.0767 6.30539 15.0587 6.19256C14.8693 5.01048 14.2918 3.74783 13.4885 2.75924C13.3661 2.60851 13.2642 2.48715 13.2621 2.48958C13.2601 2.49199 13.2188 2.49931 13.1705 2.50585ZM7.13316 3.20527C6.9075 3.35793 6.50526 3.59218 6.23929 3.72579C5.54656 4.07382 5.12022 4.20734 4.01965 4.42102C2.14319 4.78531 1.46417 4.96657 0.808715 5.27814C0.430856 5.45774 0.475462 5.40085 0.367582 5.84087C0.239216 6.36462 0.15739 7.22883 0.185818 7.76049C0.247246 8.90899 0.482495 9.84339 0.949565 10.7938C1.13675 11.1747 1.47718 11.7463 1.51684 11.7463C1.52841 11.7463 1.56156 11.6572 1.59052 11.5485C1.81542 10.7036 2.48975 9.48288 3.31844 8.42061C4.52529 6.8736 6.31543 5.21305 8.27459 3.82327L8.4747 3.68131L8.39006 3.59933C8.2724 3.4853 7.58107 2.92447 7.56038 2.92623C7.55109 2.92702 7.35883 3.05261 7.13316 3.20527ZM8.69814 4.45314C6.25488 6.19982 4.26524 8.17733 3.15892 9.95854C2.63684 10.7991 2.33501 11.5145 2.19269 12.2486L2.13449 12.5489L2.33319 12.7508C3.2598 13.692 4.41295 14.3693 5.69204 14.7236C6.13021 14.845 6.6127 14.9314 6.64696 14.8947C6.685 14.854 6.87409 14.4106 7.00409 14.0574C7.3469 13.1259 7.71559 11.7798 8.24713 9.51893C8.67291 7.70786 8.82835 7.17244 9.09244 6.60734C9.28183 6.20205 9.47367 5.92779 9.77539 5.631L10.0483 5.36252L9.91266 5.17674C9.69561 4.87953 9.09989 4.21432 9.05074 4.21432C9.04057 4.21432 8.8819 4.32179 8.69814 4.45314ZM11.9249 5.50808C11.6585 5.55207 11.2084 5.65491 11.1844 5.67733C11.172 5.68885 11.2648 5.90183 11.3907 6.15059C11.9158 7.18821 12.3196 8.36657 12.6113 9.71262C12.7893 10.5339 12.9415 11.553 12.9936 12.2738C13.0036 12.4108 13.0187 12.571 13.0272 12.6299L13.0427 12.7368L13.2103 12.5566C13.5906 12.1478 13.962 11.631 14.2455 11.1162C14.7697 10.1644 15.065 9.16402 15.1628 8.00922L15.1802 7.80369L14.8645 7.42308C14.1525 6.56447 13.4358 5.91481 12.936 5.67487C12.5682 5.4983 12.2761 5.45012 11.9249 5.50808ZM10.2857 6.16422C10.0108 6.42136 9.77542 6.83764 9.56918 7.4314C9.42871 7.83587 9.31802 8.26182 8.93541 9.87062C8.30408 12.5251 7.93325 13.8235 7.54631 14.7347C7.48834 14.8713 7.44089 14.9886 7.44089 14.9956C7.44089 15.0192 8.35809 14.9675 8.66989 14.9264C9.88561 14.766 11.0095 14.3216 12.0365 13.5951L12.3093 13.4021L12.2913 13.0065C12.1983 10.9637 11.7141 8.74932 10.9969 7.08643C10.8281 6.69512 10.4859 6.03137 10.4529 6.03137C10.439 6.03137 10.3638 6.09115 10.2857 6.16422Z" fill="#98A7B5"/>
                        </svg>
                        </span> 
                        Sports</a></li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                        <g clip-path="url(#clip0_4_484)">
                            <path d="M12.0335 0C12.01 0 11.979 0 11.956 0.0075C11.917 0.015 11.186 0.196875 10.7895 0.561562C10.393 0.92625 10.183 1.40719 10.105 1.77188C6.28702 1.89562 2.60852 3.90797 2.60852 8.19469C2.60852 9.30281 2.95852 11.0817 3.48702 11.8106C3.48702 11.8106 3.98452 12.7584 6.39552 14.0269C8.03652 14.5373 9.68502 14.5809 10.229 14.5809C10.3225 14.5809 10.3845 14.5809 10.4 14.5809C10.532 14.5809 10.641 14.4933 10.68 14.377C10.6955 14.3405 10.9835 13.5023 10.9835 12.5911C10.9835 11.6433 10.579 11.0381 10.1905 10.448C9.77052 9.82078 9.33502 9.165 9.33502 8.01281C9.33502 7.42219 9.56052 6.98484 10.0035 6.70078C10.649 7.83094 11.862 8.10047 12.3675 8.16609C12.4685 8.45062 12.702 8.93156 13.122 9.08484C13.3085 9.15797 13.5185 9.15797 13.705 9.08484C13.7985 9.13594 13.915 9.1725 14.024 9.15797C14.3505 9.15094 14.685 8.93906 14.918 8.56734C14.9415 8.53078 14.9645 8.49469 14.996 8.45813C15.2525 8.10094 15.7735 7.3575 14.615 6.315C14.063 4.09125 13.0755 2.99813 12.702 2.57531L12.6555 2.50969C12.4765 2.31281 12.29 2.11594 12.0955 1.92656L12.3445 0.3225C12.36 0.227813 12.321 0.133125 12.251 0.0675C12.189 0.0309375 12.111 0.001875 12.033 0.001875L12.0335 0ZM9.88752 0.058125C9.87202 0.058125 9.86402 0.065625 9.84852 0.065625C9.60752 0.0946875 9.44402 0.277031 9.27302 0.459375C9.20302 0.5325 9.07102 0.670781 9.00102 0.707344C8.93902 0.692813 8.80652 0.598125 8.72102 0.547031C8.48002 0.39375 8.17652 0.196875 7.83452 0.27C7.54702 0.321094 7.37552 0.583594 7.21252 0.824063C7.15052 0.91875 7.02602 1.09359 6.95602 1.14469C6.88602 1.12266 6.74602 1.0425 6.65252 0.991406C6.38802 0.845625 6.10802 0.692344 5.82802 0.78C5.53252 0.874687 5.31502 1.24641 5.22902 1.51641C5.19802 1.60406 5.15102 1.75687 5.11252 1.81547C5.03452 1.80797 4.82502 1.74984 4.73152 1.71328C4.45152 1.59656 4.06252 1.5675 3.77502 1.69875C3.47152 1.84453 3.40152 2.31094 3.40952 2.58797C3.40952 2.66812 3.40952 2.79938 3.40152 2.865C3.39352 2.93062 3.37052 2.94516 3.34702 2.95969C3.30802 2.98875 3.18352 2.98875 3.08252 3.00328C2.81802 3.03234 2.46052 2.98125 2.27402 3.20016C2.07952 3.44813 2.10302 3.73969 2.17302 4.01672C2.21202 4.11141 2.26652 4.30828 2.25852 4.34484C2.21952 4.38844 2.17302 4.41797 2.05652 4.46156C1.76102 4.55625 1.40352 4.67297 1.28652 5.00812C1.21652 5.23406 1.25552 5.37281 1.40302 5.59125C1.44202 5.64938 1.51202 5.75906 1.54302 5.81719C1.49652 5.85375 1.39502 5.91187 1.33302 5.94094C1.12302 6.05016 0.84302 6.20344 0.78102 6.51703C0.75002 6.74297 0.95202 6.98344 1.09202 7.17328C1.17002 7.26797 1.23202 7.40672 1.27102 7.46484C1.23202 7.50141 1.00652 7.70531 0.96002 7.73438C0.77352 7.86562 0.51702 8.04797 0.51702 8.34656C0.51702 8.55047 0.75052 9.05391 0.91352 9.24328C0.97552 9.31594 0.89002 9.44016 0.83552 9.51328C0.81202 9.57141 0.63352 9.75375 0.53202 9.85594C0.40752 9.99422 0.15102 10.3298 0.18202 10.6144C0.22102 10.9059 0.51652 11.2195 0.74952 11.3944C0.90502 11.5036 0.90502 11.5767 0.95152 11.6133C0.96702 11.6569 1.00602 11.6934 1.03702 11.7225C1.06802 11.7445 1.48802 12.1233 2.95752 12.1163C2.29652 11.205 1.98552 9.23672 1.98552 8.19422C1.98552 3.68859 5.72602 1.46531 9.69202 1.21734C9.79302 0.976875 9.96402 0.605156 10.314 0.225938C10.0575 0.065625 9.94102 0.0510937 9.88652 0.058125H9.88752ZM12.928 0.554063L12.749 1.74984C12.8035 1.80094 12.858 1.86656 12.9125 1.92469C13.0135 1.64016 13.1615 1.33406 13.41 1.07906C13.4875 1.00594 13.519 0.896719 13.4875 0.794531C13.456 0.692344 13.363 0.619687 13.254 0.590625C13.153 0.568594 13.052 0.554063 12.951 0.554063H12.928ZM12.096 4.37391C12.3525 4.37391 12.5625 4.57078 12.5625 4.81125C12.5625 5.05172 12.3525 5.24859 12.096 5.24859C11.8395 5.24859 11.6295 5.05172 11.6295 4.81125C11.6295 4.57078 11.8395 4.37391 12.096 4.37391Z" fill="#98A7B5"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4_484">
                            <rect width="15" height="15" fill="white" transform="translate(0.180176)"/>
                            </clipPath>
                        </defs>
                        </svg>
                        </span> 
                        Racing</a></li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5033 0.845493C11.4415 0.873524 10.6541 1.63515 9.75337 2.53794L8.11571 4.17942L8.45552 4.51579C8.83744 4.89378 8.90233 4.99269 8.90211 5.19643C8.90185 5.48509 8.6782 5.69418 8.36978 5.69418C8.16915 5.69418 8.10459 5.65163 7.69494 5.24957L7.36714 4.92784L6.06705 6.22789L4.767 7.52798H7.36651H9.96605L9.79143 7.35021C9.62189 7.17765 9.50105 6.96111 9.50105 6.82994C9.50105 6.70951 9.64892 6.45988 9.75864 6.39506C9.88274 6.32175 10.1394 6.30992 10.2614 6.37194C10.3788 6.43159 11.0682 7.11608 11.1317 7.23607C11.1611 7.29168 11.1852 7.38008 11.1852 7.43255V7.52798H12.4288H13.6725L12.3374 6.19005C11.6031 5.45417 10.9844 4.80471 10.9627 4.74678C10.8182 4.36168 11.133 3.96472 11.5317 4.02935C11.6804 4.05345 11.7997 4.16396 13.4306 5.78897L15.1709 7.52285L15.9568 7.53662C16.6623 7.54894 16.7638 7.55885 16.9485 7.63325C17.5444 7.8733 17.9029 8.37621 17.9495 9.03757L17.9701 9.33087L18.4511 8.85097C18.9604 8.34282 19.0332 8.22542 18.9891 7.984C18.9675 7.86607 18.8113 7.69295 17.9105 6.78899C17.2146 6.09069 16.8186 5.7203 16.7437 5.6977C16.6814 5.67891 16.4913 5.65406 16.3212 5.64257C15.1809 5.56529 14.2349 4.63128 14.1561 3.50484C14.1185 2.96724 14.1973 3.08019 13.0629 1.93836C12.4933 1.36498 11.973 0.872364 11.9068 0.843697C11.7576 0.779102 11.6484 0.779589 11.5033 0.845493ZM0.297275 8.64143C0.226692 8.6774 0.134066 8.75438 0.0914396 8.81246C0.0167402 8.91422 0.0135217 8.96991 0.00274347 10.3469C-0.00343158 11.1327 0.00117163 11.8285 0.0129978 11.8931C0.0254602 11.9613 0.137397 12.1343 0.279273 12.3048C1.09831 13.2892 1.09842 14.4925 0.279573 15.4755C0.137322 15.6462 0.0254602 15.819 0.0129978 15.8872C0.00117163 15.9518 -0.00343158 16.6476 0.00274347 17.4334C0.0135217 18.8104 0.0167402 18.8661 0.0914396 18.9678C0.134066 19.0259 0.226692 19.1029 0.297275 19.1389C0.417632 19.2002 0.747679 19.2043 5.59954 19.2044L10.7735 19.2044L10.7736 18.6898C10.7738 18.1128 10.8106 17.9995 11.0445 17.857C11.2825 17.7118 11.5912 17.7982 11.7467 18.0533C11.8114 18.1593 11.8211 18.2424 11.8212 18.6898L11.8214 19.2044L14.151 19.2044C16.723 19.2043 16.6356 19.2121 16.8149 18.9678C16.8896 18.8661 16.8928 18.8104 16.9036 17.4334C16.9098 16.6476 16.9051 15.9514 16.8932 15.8863C16.8808 15.8187 16.7766 15.6546 16.6503 15.5038C16.3745 15.1746 16.256 14.9737 16.1337 14.6286C15.9998 14.251 15.991 13.5881 16.1146 13.1978C16.2168 12.8752 16.4085 12.5476 16.671 12.2466C16.7879 12.1124 16.8797 11.9677 16.8927 11.8967C16.9049 11.8302 16.9098 11.1327 16.9036 10.3469C16.8928 8.96991 16.8896 8.91422 16.8149 8.81246C16.6356 8.56823 16.723 8.57598 14.151 8.57594L11.8214 8.57587L11.8212 9.09045C11.8211 9.5379 11.8114 9.62095 11.7467 9.72701C11.5314 10.0801 11.0634 10.0801 10.8481 9.72701C10.7835 9.62095 10.7737 9.5379 10.7736 9.09045L10.7735 8.57587L5.59954 8.57594C0.747679 8.57598 0.417632 8.58006 0.297275 8.64143ZM5.91915 10.7499C5.82177 10.8122 5.72196 10.9841 5.39184 11.6582L4.98462 12.4896L4.10855 12.6136C3.55399 12.6921 3.19128 12.761 3.12028 12.8013C2.87758 12.9392 2.77381 13.2435 2.89199 13.471C2.92088 13.5266 3.23162 13.8546 3.58255 14.2L4.22056 14.828L4.07307 15.6783C3.99197 16.1459 3.92543 16.5681 3.92521 16.6165C3.92453 16.7597 4.0364 16.9524 4.16708 17.0332C4.40821 17.1822 4.53032 17.1485 5.38435 16.697C5.8126 16.4706 6.18393 16.2853 6.20949 16.2853C6.23509 16.2853 6.60552 16.4706 7.03268 16.697C7.66504 17.0322 7.83858 17.1087 7.96646 17.1087C8.1739 17.1087 8.31937 17.0174 8.42292 16.8221L8.50765 16.6624L8.35208 15.7463L8.19651 14.8301L8.83336 14.2011C9.18365 13.8551 9.49402 13.5266 9.52306 13.471C9.64169 13.2441 9.5381 12.9396 9.2951 12.8011C9.224 12.7606 8.86188 12.6913 8.3062 12.612L7.42949 12.4867L7.02377 11.6567C6.68328 10.9601 6.59792 10.8142 6.49268 10.7491C6.32839 10.6476 6.07828 10.6479 5.91915 10.7499ZM13.6642 10.7463C13.5971 10.7872 13.5088 10.8755 13.4679 10.9426C13.3954 11.0615 13.3935 11.1366 13.3935 13.8901C13.3935 16.6437 13.3954 16.7188 13.4679 16.8377C13.6831 17.1907 14.1512 17.1907 14.3664 16.8377C14.4389 16.7188 14.4408 16.6437 14.4408 13.8901C14.4408 11.1366 14.4389 11.0615 14.3664 10.9426C14.2704 10.785 14.0826 10.6719 13.9171 10.6719C13.8451 10.6719 13.7313 10.7054 13.6642 10.7463ZM11.0167 11.3823C10.8062 11.5208 10.7735 11.6381 10.7735 12.2535C10.7735 12.8785 10.8056 13.0047 11.0003 13.1433C11.2569 13.326 11.6498 13.2178 11.7695 12.9314C11.8477 12.7441 11.8417 11.7549 11.7613 11.5854C11.6383 11.3263 11.2591 11.2228 11.0167 11.3823ZM5.96443 12.8519C5.68345 13.4252 5.65347 13.4478 5.05752 13.5336C4.81531 13.5684 4.59339 13.6045 4.56438 13.6137C4.52995 13.6246 4.6429 13.7638 4.88904 14.014C5.11029 14.2388 5.27754 14.4415 5.29315 14.5037C5.30872 14.5658 5.28611 14.8123 5.2387 15.0972C5.19412 15.3652 5.16516 15.5921 5.17436 15.6013C5.18353 15.6105 5.38349 15.5155 5.6187 15.3903C6.18408 15.0892 6.23134 15.0892 6.79803 15.3894C7.03346 15.5141 7.23324 15.6091 7.24196 15.6004C7.25064 15.5917 7.22126 15.3652 7.17669 15.0972C7.12927 14.8123 7.10667 14.5658 7.12224 14.5037C7.13784 14.4415 7.30509 14.2388 7.52635 14.014C7.77705 13.7592 7.88607 13.6244 7.851 13.6123C7.822 13.6023 7.6049 13.5666 7.3686 13.5328C6.72962 13.4416 6.70282 13.4208 6.41214 12.7889C6.31203 12.5712 6.22087 12.3933 6.20956 12.3934C6.19822 12.3936 6.08793 12.5999 5.96443 12.8519ZM11.1664 14.5527C11.0324 14.5883 10.8784 14.7219 10.8254 14.8489C10.7892 14.9355 10.7735 15.1384 10.7735 15.5206C10.7735 16.1395 10.8094 16.2694 11.0158 16.397C11.2709 16.5547 11.6377 16.4552 11.7613 16.1949C11.8417 16.0254 11.8477 15.0362 11.7695 14.8489C11.681 14.6371 11.3888 14.4936 11.1664 14.5527Z" fill="#98A7B5"/>
                        </svg>
                        </span> 
                        Lottery </a></li>
                       
                    
            </div>
            <div className="top-action">
                <SignIn/>
                   <SignUp/>
                   <span className="nav-action">
                    <span onClick={handleChatOpen}  className="seen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.05606 0.528924C7.31725 0.61205 6.39225 0.838752 5.725 1.1002C2.57223 2.33566 0.382359 5.2131 0.0292291 8.58451C-0.0289247 9.13943 0.00398588 10.3923 0.0900566 10.9019C0.235893 11.7656 0.519978 12.6576 0.899963 13.4451C1.00695 13.6668 1.09448 13.8808 1.09448 13.9206C1.09448 13.9603 0.898744 14.6637 0.659563 15.4836C0.420342 16.3035 0.214425 17.0848 0.202 17.22C0.181632 17.4408 0.191855 17.491 0.302973 17.7166C0.491314 18.0991 0.793957 18.2936 1.20681 18.2977C1.38128 18.2994 1.76606 18.1983 3.00734 17.8245L4.58599 17.3492L5.12101 17.6063C5.99957 18.0286 7.00501 18.3272 7.97542 18.4541C8.50757 18.5237 9.66463 18.5124 10.2363 18.432C11.7617 18.2175 13.1668 17.6411 14.4042 16.7221C14.8654 16.3796 15.6236 15.6518 15.9842 15.2056C17.0329 13.9079 17.7295 12.2883 17.9417 10.6543C18.0194 10.0562 18.0194 8.95781 17.9418 8.35902C17.7235 6.67476 17.0141 5.04162 15.9441 3.75994C15.0854 2.73133 14.1501 1.99726 12.9494 1.40956C12.0783 0.983231 11.3998 0.765137 10.4329 0.600652C9.88588 0.507582 8.59262 0.468554 8.05606 0.528924ZM5.40855 8.85987C5.1043 8.93529 4.85375 9.13538 4.69982 9.42595C4.58087 9.65045 4.5808 10.1101 4.69962 10.332C4.94623 10.7923 5.44315 11.0199 5.90709 10.8851C6.81592 10.621 6.96542 9.42973 6.14706 8.97251C5.92631 8.84918 5.6324 8.80437 5.40855 8.85987ZM8.78147 8.85531C8.55751 8.91642 8.4508 8.97302 8.29584 9.11302C7.85632 9.5099 7.84067 10.1768 8.26057 10.6157C8.66324 11.0365 9.36867 11.0202 9.7658 10.5808C9.96437 10.3611 10.033 10.1812 10.0332 9.88002C10.0334 9.46553 9.82734 9.13428 9.44991 8.94217C9.26837 8.84977 8.95236 8.80869 8.78147 8.85531ZM12.0911 8.87366C11.8314 8.94547 11.5975 9.11899 11.4594 9.34232C11.3643 9.49603 11.3408 9.58325 11.3269 9.83239C11.3117 10.108 11.3204 10.155 11.4237 10.351C11.8275 11.1173 12.8857 11.1077 13.2956 10.3341C13.4146 10.1096 13.4147 9.6499 13.2958 9.42804C13.0527 8.97428 12.5552 8.7453 12.0911 8.87366Z" fill="#98A7B5"/>
</svg>
                    </span>
                    <span onClick={closeChat}  className="unseen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.05606 8.52892C7.31725 8.61205 6.39225 8.83875 5.725 9.1002C2.57223 10.3357 0.382359 13.2131 0.0292291 16.5845C-0.0289247 17.1394 0.00398588 18.3923 0.0900566 18.9019C0.235893 19.7656 0.519978 20.6576 0.899963 21.4451C1.00695 21.6668 1.09448 21.8808 1.09448 21.9206C1.09448 21.9603 0.898744 22.6637 0.659563 23.4836C0.420342 24.3035 0.214425 25.0848 0.202 25.22C0.181632 25.4408 0.191855 25.491 0.302973 25.7166C0.491314 26.0991 0.793957 26.2936 1.20681 26.2977C1.38128 26.2994 1.76606 26.1983 3.00734 25.8245L4.58599 25.3492L5.12101 25.6063C5.99957 26.0286 7.00501 26.3272 7.97542 26.4541C8.50757 26.5237 9.66463 26.5124 10.2363 26.432C11.7617 26.2175 13.1668 25.6411 14.4042 24.7221C14.8654 24.3796 15.6236 23.6518 15.9842 23.2056C17.0329 21.9079 17.7295 20.2883 17.9417 18.6543C18.0194 18.0562 18.0194 16.9578 17.9418 16.359C17.7235 14.6748 17.0141 13.0416 15.9441 11.7599C15.0854 10.7313 14.1501 9.99726 12.9494 9.40956C12.0783 8.98323 11.3998 8.76514 10.4329 8.60065C9.88588 8.50758 8.59262 8.46855 8.05606 8.52892ZM5.40855 16.8599C5.1043 16.9353 4.85375 17.1354 4.69982 17.426C4.58087 17.6505 4.5808 18.1101 4.69962 18.332C4.94623 18.7923 5.44315 19.0199 5.90709 18.8851C6.81592 18.621 6.96542 17.4297 6.14706 16.9725C5.92631 16.8492 5.6324 16.8044 5.40855 16.8599ZM8.78147 16.8553C8.55751 16.9164 8.4508 16.973 8.29584 17.113C7.85632 17.5099 7.84067 18.1768 8.26057 18.6157C8.66324 19.0365 9.36867 19.0202 9.7658 18.5808C9.96437 18.3611 10.033 18.1812 10.0332 17.88C10.0334 17.4655 9.82734 17.1343 9.44991 16.9422C9.26837 16.8498 8.95236 16.8087 8.78147 16.8553ZM12.0911 16.8737C11.8314 16.9455 11.5975 17.119 11.4594 17.3423C11.3643 17.496 11.3408 17.5832 11.3269 17.8324C11.3117 18.108 11.3204 18.155 11.4237 18.351C11.8275 19.1173 12.8857 19.1077 13.2956 18.3341C13.4146 18.1096 13.4147 17.6499 13.2958 17.428C13.0527 16.9743 12.5552 16.7453 12.0911 16.8737Z" fill="#98A7B5"/>
  <rect x="18" y="0.5" width="10" height="10" rx="5" fill="#3BC117"/>
</svg>
                    </span>
                   </span>
                   <span className="nav-action">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.16773 0.521748C5.91899 0.747173 3.89094 1.74873 2.38478 3.37773C1.14936 4.71394 0.377454 6.32522 0.0838201 8.18094C-0.026196 8.87613 -0.0260555 10.1463 0.084101 10.8279C0.421629 12.9166 1.37128 14.7181 2.86849 16.1101C4.20105 17.3489 5.80792 18.1229 7.65856 18.4173C8.35184 18.5277 9.61852 18.5275 10.2983 18.4171C12.6248 18.039 14.5981 16.8909 16.0328 15.0805C16.9849 13.8792 17.6198 12.4104 17.8587 10.857C17.8974 10.6053 17.9292 10.317 17.9294 10.2165C17.9296 10.116 17.9456 10.0239 17.9649 10.0119C17.9858 9.99899 18 9.77614 18 9.46201C18 9.11888 17.9877 8.94145 17.9649 8.9556C17.9432 8.96905 17.9296 8.90599 17.9294 8.79042C17.9292 8.6876 17.8981 8.4025 17.8603 8.15689C17.5095 5.87846 16.3397 3.85928 14.5392 2.42455C13.3425 1.47095 11.8888 0.838582 10.3273 0.592312C9.80919 0.510586 8.6552 0.472909 8.16773 0.521748ZM7.75885 1.63662C7.58222 1.66394 7.29993 1.72155 7.13155 1.76458L6.82535 1.84285L6.70536 2.14215C6.50731 2.63617 6.28787 3.26294 6.13744 3.76428C5.99263 4.24689 5.85013 4.78422 5.85013 4.8476C5.85013 4.93813 7.70102 5.20556 8.32765 5.20556H8.44866V3.39216V1.57877L8.2643 1.58285C8.16292 1.58507 7.93545 1.60929 7.75885 1.63662ZM9.50211 3.39216V5.20556H9.62312C10.2498 5.20556 12.1006 4.93813 12.1006 4.8476C12.1006 4.78422 11.9581 4.24689 11.8133 3.76428C11.6629 3.26294 11.4435 2.63617 11.2454 2.14215L11.1254 1.84285L10.8269 1.76648C10.4883 1.67986 9.84993 1.57877 9.64152 1.57877H9.50211V3.39216ZM5.14782 2.53909C4.696 2.79061 4.32061 3.04815 3.90123 3.39442C3.5394 3.69315 3.22674 3.9959 3.25378 4.02132C3.31751 4.08122 4.79365 4.62601 4.8157 4.59781C4.81932 4.59316 4.88811 4.34179 4.96856 4.03918C5.04901 3.7366 5.20014 3.2335 5.30437 2.92121C5.40862 2.60892 5.49107 2.35342 5.48767 2.35342C5.48423 2.35342 5.3313 2.43698 5.14782 2.53909ZM12.6457 2.91899C12.7503 3.23251 12.9018 3.7366 12.9822 4.03918C13.0627 4.34179 13.1314 4.59316 13.1351 4.59781C13.1571 4.62601 14.6333 4.08122 14.697 4.02132C14.724 3.99594 14.4115 3.69326 14.0495 3.39431C13.6354 3.05227 13.183 2.7435 12.7603 2.5143L12.4554 2.34898L12.6457 2.91899ZM2.31831 5.16634C2.0561 5.57021 1.63437 6.43755 1.47737 6.89572C1.27261 7.49319 1.07446 8.45229 1.07446 8.84567V8.97321H2.65183H4.22924L4.24736 8.75313C4.2573 8.63211 4.28332 8.26369 4.30516 7.93446C4.34642 7.31263 4.43702 6.53667 4.53352 5.97906C4.56435 5.80092 4.58479 5.65155 4.57899 5.64715C4.57316 5.64275 4.33139 5.55888 4.04169 5.46078C3.75199 5.36268 3.29002 5.18803 3.0151 5.07271L2.5152 4.86299L2.31831 5.16634ZM14.945 5.06753C14.6842 5.17848 14.226 5.35243 13.9266 5.45405C13.6273 5.55567 13.3776 5.6425 13.3718 5.64698C13.366 5.65148 13.3864 5.80092 13.4172 5.97906C13.5137 6.53667 13.6043 7.31263 13.6456 7.93446C13.6674 8.26369 13.6935 8.63211 13.7034 8.75313L13.7215 8.97321H15.2989H16.8763V8.84567C16.8763 8.64986 16.7756 8.00953 16.6831 7.61756C16.556 7.0785 16.3723 6.57825 16.0883 5.99782C15.8714 5.55469 15.5267 4.96193 15.4417 4.88602C15.4292 4.87489 15.2057 4.95655 14.945 5.06753ZM5.54034 6.36177C5.45589 6.87079 5.33797 8.01517 5.3103 8.59468L5.29222 8.97321H6.87044H8.44866V7.6221V6.27096L8.05361 6.24695C7.31921 6.20233 6.18435 6.04701 5.68923 5.92339C5.62065 5.90627 5.61138 5.93356 5.54034 6.36177ZM11.9437 5.98402C11.4393 6.09163 10.7391 6.18526 10.0978 6.23085L9.50211 6.27321V7.62323V8.97321H11.0803H12.6586L12.6405 8.59468C12.5924 7.58766 12.377 5.90599 12.297 5.91332C12.2759 5.91525 12.117 5.94708 11.9437 5.98402ZM0 9.50138C0 9.80156 0.00540774 9.92434 0.0119743 9.77427C0.018576 9.6242 0.018576 9.37856 0.0119743 9.22849C0.00540774 9.07842 0 9.2012 0 9.50138ZM1.07446 10.1571C1.07446 10.5505 1.27261 11.5096 1.47737 12.107C1.63437 12.5652 2.0561 13.4325 2.31831 13.8364L2.5152 14.1398L3.0151 13.9301C3.29002 13.8147 3.75199 13.6401 4.04169 13.542C4.33139 13.4439 4.57316 13.36 4.57899 13.3556C4.58479 13.3512 4.56435 13.2018 4.53352 13.0237C4.43702 12.4661 4.34642 11.6901 4.30516 11.0683C4.28332 10.7391 4.2573 10.3707 4.24736 10.2496L4.22924 10.0296H2.65183H1.07446V10.1571ZM5.3103 10.4081C5.33797 10.9876 5.45589 12.132 5.54034 12.641C5.61138 13.0692 5.62065 13.0965 5.68923 13.0794C6.18435 12.9557 7.31921 12.8004 8.05361 12.7558L8.44866 12.7318V11.3807V10.0296H6.87044H5.29222L5.3103 10.4081ZM9.50211 11.3807V12.7318L9.89716 12.7558C10.6316 12.8004 11.7664 12.9557 12.2615 13.0794C12.3301 13.0965 12.3394 13.0692 12.4104 12.641C12.4949 12.132 12.6128 10.9876 12.6405 10.4081L12.6586 10.0296H11.0803H9.50211V11.3807ZM13.7034 10.2496C13.6935 10.3707 13.6674 10.7391 13.6456 11.0683C13.6043 11.6901 13.5137 12.4661 13.4172 13.0237C13.3864 13.2018 13.366 13.3512 13.3718 13.3556C13.3776 13.36 13.6194 13.4439 13.9091 13.542C14.1988 13.6401 14.6608 13.8147 14.9357 13.9301L15.4356 14.1398L15.6325 13.8364C15.8947 13.4325 16.3164 12.5652 16.4734 12.107C16.6782 11.5096 16.8763 10.5505 16.8763 10.1571V10.0296H15.2989H13.7215L13.7034 10.2496ZM7.67612 13.8383C7.29965 13.8703 6.36646 14.0076 6.03448 14.0798C5.93311 14.1019 5.85013 14.1358 5.85013 14.1552C5.85013 14.2185 5.99263 14.7559 6.13744 15.2385C6.28787 15.7398 6.50731 16.3666 6.70536 16.8606L6.82535 17.1599L7.12386 17.2363C7.46251 17.3229 8.10084 17.424 8.30925 17.424H8.44866V15.6106V13.7972L8.24674 13.8021C8.13571 13.8048 7.87891 13.8211 7.67612 13.8383ZM9.50211 15.6106V17.424H9.64152C9.84993 17.424 10.4883 17.3229 10.8269 17.2363L11.1254 17.1599L11.2454 16.8606C11.4435 16.3666 11.6629 15.7398 11.8133 15.2385C11.9581 14.7559 12.1006 14.2185 12.1006 14.1552C12.1006 14.0646 10.2498 13.7972 9.62312 13.7972H9.50211V15.6106ZM4.34017 14.5524C3.93884 14.6907 3.29089 14.9465 3.25378 14.9814C3.22674 15.0068 3.53926 15.3095 3.90123 15.6084C4.31538 15.9505 4.76774 16.2593 5.19042 16.4884L5.49529 16.6537L5.2932 16.0441C5.18203 15.7089 5.02941 15.2008 4.95406 14.9152C4.8787 14.6295 4.8085 14.397 4.79808 14.3985C4.78765 14.4 4.58159 14.4692 4.34017 14.5524ZM12.9967 14.9152C12.9214 15.2008 12.7687 15.7089 12.6576 16.0441L12.4555 16.6537L12.7603 16.4884C13.183 16.2593 13.6354 15.9505 14.0495 15.6084C14.4115 15.3095 14.724 15.0068 14.697 14.9814C14.6448 14.9325 13.215 14.3958 13.1366 14.3958C13.135 14.3958 13.0721 14.6295 12.9967 14.9152Z" fill="#98A7B5"/>
</svg>
                   </span>
            </div>
        </div>
        </div>
        
    );
}
export default TopNavMenu;