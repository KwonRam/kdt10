import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/conditions.scss';
import useErrorHandler from '../utils/useErrorHandler';
function SignupPage() {
    const { errorHandler } = useErrorHandler();
    const navigate = useNavigate();
    const [isUnique, setIsUnique] = useState<boolean>(false);
    const [gender, setGender] = useState<string>('m');
    const [existErrorMsg, setExistErrorMsg] = useState<string>('');
    const [passwordsNotSameMsg, setPasswordsNotSameMsg] = useState('');
    const [signupErrorMsg, setSignupErrorMsg] = useState<string>('');
    const [displayToggle, setDisplayToggle] = useState<boolean>(true);
    const [learningLang2Toggle, setLearningLang2Toggle] =
        useState<boolean>(false);
    const [learningLang3Toggle, setLearningLang3Toggle] =
        useState<boolean>(false);
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const nationRef = useRef<HTMLSelectElement>(null);
    const firLangRef = useRef<HTMLSelectElement>(null);
    const learningLang1Ref = useRef<HTMLSelectElement>(null);
    const learningLang2Ref = useRef<HTMLSelectElement>(null);
    const learningLang3Ref = useRef<HTMLSelectElement>(null);
    const changeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    };
    const Toggle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (!isUnique) {
            return setPasswordsNotSameMsg('Please check the ID validity');
        }
        if (
            passwordRef.current?.value === undefined ||
            passwordRef.current?.value.length < 6
        ) {
            return setPasswordsNotSameMsg(
                `Password should be at least 6 characters long.`
            );
        }
        if (
            !(passwordRef.current?.value === confirmPasswordRef.current?.value)
        ) {
            return setPasswordsNotSameMsg(
                `There's a difference between password and confirm password`
            );
        }
        setPasswordsNotSameMsg('');
        setDisplayToggle(!displayToggle);
    };

    const submitForm = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        // 빈 배열 learningLangs 만들어서 value 있는 language만 push 해주기
        const learningLangs: Array<string | null | undefined> = [];
        if (
            learningLang1Ref.current?.value.trim() !== '' &&
            learningLang1Ref.current?.value.trim()
        ) {
            learningLangs.push(learningLang1Ref.current?.value.trim());
        }
        if (
            learningLang2Ref.current?.value.trim() !== '' &&
            learningLang2Ref.current?.value.trim()
        ) {
            learningLangs.push(learningLang2Ref.current?.value.trim());
        }
        if (
            learningLang3Ref.current?.value.trim() !== '' &&
            learningLang3Ref.current?.value.trim()
        ) {
            learningLangs.push(learningLang3Ref.current?.value.trim());
        }
        try {
            const res = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_SERVERURL}/signup`,
                data: {
                    userid: idRef.current?.value,
                    password: passwordRef.current?.value,
                    confirmPassword: confirmPasswordRef.current?.value,
                    name: nameRef.current?.value,
                    gender: gender,
                    isUnique: isUnique,
                    nation: nationRef.current?.value,
                    firLang: firLangRef.current?.value,
                    learningLang: learningLangs,
                },
                withCredentials: true,
            });
            setSignupErrorMsg(res.data.msg);
            if (!res.data.isError) {
                navigate('/');
            }
        } catch (err: any) {
            errorHandler(err.response.status);
        }
    };
    const existAlready = async (e: React.FocusEvent<HTMLInputElement>) => {
        e.preventDefault();
        try {
            const res = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_SERVERURL}/existAlready`,
                data: {
                    userid: idRef.current?.value,
                },
                withCredentials: true,
            });
            setIsUnique(res.data.isUnique);
            setExistErrorMsg(res.data.msg);
        } catch (err: any) {
            errorHandler(err.response.status);
        }
    };
    return (
        <div className="signup-or-login">
            <div className="signupcontainer">
                <header>
                    <img
                        src="/images/backBtn.png"
                        alt="back"
                        className={
                            !displayToggle ? 'dblock backbtn' : 'dnone backbtn'
                        }
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                            Toggle(e);
                        }}
                    />
                    <img src="/images/loginPageLogo.png" alt="logo" />
                </header>
                <h1 className="getgreen">User Information</h1>
                <form>
                    <fieldset className={displayToggle ? 'dblock' : 'dnone'}>
                        <input
                            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                                existAlready(e)
                            }
                            type="text"
                            name="id"
                            placeholder="ID"
                            ref={idRef}
                        />
                        <br />
                        {existErrorMsg.length > 0 && (
                            <div className={isUnique ? 'getgreen' : 'getred'}>
                                {existErrorMsg}
                            </div>
                        )}
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            ref={passwordRef}
                        />
                        <br />
                        <input
                            type="password"
                            name="confirmpassword"
                            placeholder="confirmpassword"
                            ref={confirmPasswordRef}
                        />
                        <br />
                        {passwordsNotSameMsg.length > 0 && (
                            <div className="getred">{passwordsNotSameMsg}</div>
                        )}
                        <img
                            className="next-btn"
                            src="/images/nextBtn.png"
                            alt="next-btn"
                            onClick={(e: React.MouseEvent<HTMLElement>) => {
                                Toggle(e);
                            }}
                        />
                        <p>
                            Already have an account? <a href="/login">Log In</a>
                        </p>
                    </fieldset>
                    <fieldset className={!displayToggle ? 'dblock' : 'dnone'}>
                        <label htmlFor="">User Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Type here..."
                            ref={nameRef}
                        />
                        <label htmlFor="">Gender</label>
                        <div className="radio-btns-flex">
                            <div className="radio-btn-flex">
                                <input
                                    className="radio-btn"
                                    type="radio"
                                    name="gender"
                                    value="m"
                                    id="male-btn"
                                    onChange={(e) => changeGender(e)}
                                    readOnly
                                    checked
                                />
                                <label
                                    htmlFor="male-btn"
                                    className="gender-label"
                                >
                                    Male
                                </label>
                            </div>
                            <div className="radio-btn-flex">
                                <input
                                    className="radio-btn"
                                    type="radio"
                                    name="gender"
                                    value="f"
                                    id="female-btn"
                                    onChange={(e) => changeGender(e)}
                                    readOnly
                                />
                                <label
                                    htmlFor="female-btn"
                                    className="gender-label"
                                >
                                    Female
                                </label>
                            </div>
                        </div>
                        <br />
                        <label htmlFor="">Nation</label>
                        <select name="nation" defaultValue="" ref={nationRef}>
                            <option value="">Choose here...</option>
                            <option value="China">China</option>
                            <option value="America">America</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Japan">Japan</option>
                            <option value="Korea">Korea</option>
                        </select>
                        <label htmlFor="">First Language</label>
                        <select name="firlang" defaultValue="" ref={firLangRef}>
                            <option value="">Choose here...</option>
                            <option value="Chinese">Chinese</option>
                            <option value="English">English</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Korean">Korean</option>
                        </select>
                        <label htmlFor="">Learning Language</label>
                        <fieldset className="learning-langs-select">
                            <select
                                name="learninglang1"
                                defaultValue=""
                                ref={learningLang1Ref}
                            >
                                <option value="">Choose here...</option>
                                <option value="Chinese">Chinese</option>
                                <option value="English">English</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Korean">Korean</option>
                            </select>
                            <span
                                className="plus-and-minus-btn"
                                onClick={() => setLearningLang2Toggle(true)}
                            >
                                <img src="/images/elementplus.png" alt="plus" />
                            </span>
                        </fieldset>
                        <fieldset
                            className={
                                learningLang2Toggle
                                    ? 'dblock learning-langs-select'
                                    : 'dnone learning-langs-select'
                            }
                        >
                            <select
                                name="learninglang2"
                                defaultValue=""
                                ref={learningLang2Ref}
                            >
                                <option value="">Choose here...</option>
                                <option value="Chinese">Chinese</option>
                                <option value="English">English</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Korean">Korean</option>
                            </select>
                            <span className="plus-and-minus-btn">
                                <img
                                    onClick={() => setLearningLang3Toggle(true)}
                                    src="/images/elementplus.png"
                                    alt="plus"
                                />
                                <img
                                    onClick={() =>
                                        setLearningLang2Toggle(false)
                                    }
                                    src="/images/elementminus.png"
                                    alt="minus"
                                />
                            </span>
                        </fieldset>
                        <fieldset
                            className={
                                learningLang3Toggle
                                    ? 'dblock learning-langs-select'
                                    : 'dnone learning-langs-select'
                            }
                        >
                            <select
                                name="learninglang3"
                                defaultValue=""
                                ref={learningLang3Ref}
                            >
                                <option value="">Choose here...</option>
                                <option value="Chinese">Chinese</option>
                                <option value="English">English</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Korean">Korean</option>
                            </select>
                            <span
                                className="plus-and-minus-btn"
                                onClick={() => setLearningLang3Toggle(false)}
                            >
                                <img
                                    src="/images/elementminus.png"
                                    alt="minus"
                                />
                            </span>
                        </fieldset>
                        <br />
                        <img
                            className="next-btn"
                            src="/images/signupBtn.png"
                            alt="Sign up Btn"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                submitForm(e)
                            }
                        />
                        <div className="getred">{signupErrorMsg}</div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
