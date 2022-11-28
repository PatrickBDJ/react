import { Hourglass } from 'lucide-react';
import { Clock } from 'lucide-react';
import { PiggyBank } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function MainInfoModal() {
    return(
        <div className="information-button">
            <div className="information-text-div">
            <h2>Information om lokalebookinger</h2>
            <p><span id="info-span"> Bookingsystemet tillader bookinger af mødelokaler og undervisningslokaler, der ligger i Lyngby's afdeling.</span></p>
            <p><span className="icon-left"><Hourglass size={22} /></span> Mødelokalerne kan bookes i min. 1 time op til 4 timer af gangen. Lokalerne er alle forsynet med projektorer og tavler, samt borde og stole. Lokalernes størrelse varierer dog.</p>
            <p><span className="icon-left"><Hourglass size={22} /></span> Undervisningslokalerne kan bookes i min. 1 time op til 8 timer af gangen, alt efter behov og tilgængelighed. Lokalerne er alle forsynet med projektorer og tavler, samt borde og stole. Lokalernes størrelse varierer dog.</p>
            <p><span className="icon-left"><Clock size={22} /></span> Studerende har en booking grænse på 8 timer pr. 14 dage. Det vil sige ca. 16 timer om måneden. Timerne kan benyttes efter behov, og studerende vælger selv, om de vil benytte timerne på samme dag, uge eller fordelt på de to uger. </p>
            <p><span className="icon-left"><PiggyBank size={22} /></span> Resttimer bliver ikke besparet, hvis man ikke får dem brugt. Hver 14 dag nulstilles booking grænsen. </p>
            <p><span className="icon-left"><Trash2 size={22} /></span> Bookinger kan slettes og rettes helt frem til mødetidspunktet, hvis man er forhindret i at bruge lokalet.</p>
            <p><span className="icon-left"><Mail size={22} /></span> For særlige bookinger, herunder godkendte arrangementer og/eller events, bedes i venligst kontakte administrationen på følgende mail-adresse:
            <span><a href="#"> bookinglyngby@cphbusiness.dk</a></span></p>
            </div>
        </div>
    );
}