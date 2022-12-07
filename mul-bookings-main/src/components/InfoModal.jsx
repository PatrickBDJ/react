import hourglass from "../assets/hourglass.svg";
import clock from "../assets/clock.svg";
import piggybank from "../assets/piggybank.svg";
import bin from "../assets/bin.svg";
import mail from "../assets/mail.svg";

export default function InfoModal() {
    return (
        <div className="information-button">
            <div className="information-text-div">
                <h2>Information om lokalebookinger</h2>
                <p><span id="info-span"> Bookingsystemet tillader bookinger af mødelokaler og undervisningslokaler, der ligger i Lyngby's afdeling.</span></p>
                <div>
                    <img src={hourglass} alt="hourglass" className="icon-left" />
                    <p> Mødelokalerne kan bookes i min. 1 time op til 4 timer af gangen. Lokalerne er alle forsynet med projektorer og tavler, samt borde og stole. Lokalernes størrelse varierer dog.</p>
                </div>
                <div>
                    <img src={hourglass} alt="hourglass" className="icon-left" />
                    <p> Undervisningslokalerne kan bookes i min. 1 time op til 8 timer af gangen, alt efter behov og tilgængelighed. Lokalerne er alle forsynet med projektorer og tavler, samt borde og stole. Lokalernes størrelse varierer dog.</p>
                </div>
                <div>
                    <img src={clock} alt="clock" className="icon-left" />
                    <p> Studerende har en booking grænse på 8 timer pr. 14 dage. Det vil sige ca. 16 timer om måneden. Timerne kan benyttes efter behov, og studerende vælger selv, om de vil benytte timerne på samme dag, uge eller fordelt på de to uger. </p>
                </div>
                <div>
                    <img src={piggybank} alt="piggybank" className="icon-left" />
                    <p> Resttimer bliver ikke besparet, hvis man ikke får dem brugt. Hver 14 dag nulstilles booking grænsen. </p>
                </div>
                <div>
                    <img src={bin} alt="bin" className="icon-left" />
                    <p>Bookinger kan slettes og rettes helt frem til mødetidspunktet, hvis man er forhindret i at bruge lokalet.</p>
                </div>
                <div>
                    <img src={mail} alt="mail" className="icon-left" />
                    <p> For særlige bookinger, herunder godkendte arrangementer og/eller events, bedes i venligst kontakte administrationen på følgende mail-adresse:
                        <span><a href="#"> bookinglyngby@cphbusiness.dk</a></span></p>
                </div>
            </div>
        </div>
    );
}