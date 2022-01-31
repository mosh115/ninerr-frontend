export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    delay,
    makeLevel,
    makeRate,
    getReviewer,
    getCountryCode
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function makeLevel() {
    const level = ['Top Rated Seller', 'Level 2 Seller', 'Level 1 Seller', 'New Seller']
    return level[getRandomIntInclusive(0, 3)]
}

function makeRate() {
    const rate = ['5.0', '4.1', '5.0', '4.4', '5.0', '4.6', '4.7', '5.0', '4.8', '4.9', '5.0']
    return rate[getRandomIntInclusive(0, 10)]
}


function getReviewer() {
    const data = [
        {
            "country": "CHL",
            "uname": "HCampbell"
        },
        {
            "country": "PHL",
            "uname": "IBario"
        },
        {
            "country": "TWN",
            "uname": "CHoward"
        },
        {
            "country": "BDI",
            "uname": "RWild"
        },
        {
            "country": "LBN",
            "uname": "LSprague"
        },
        {
            "country": "NAM",
            "uname": "MLiao"
        },
        {
            "country": "CRI",
            "uname": "DElliott"
        },
        {
            "country": "TJK",
            "uname": "KMaynard"
        },
        {
            "country": "VIR",
            "uname": "EHodgson"
        },
        {
            "country": "ROU",
            "uname": "LGreen"
        },
        {
            "country": "COK",
            "uname": "SChristopher"
        },
        {
            "country": "VNM",
            "uname": "CEarls"
        },
        {
            "country": "OMN",
            "uname": "CBernstein"
        },
        {
            "country": "ESP",
            "uname": "AHodgson"
        },
        {
            "country": "HMD",
            "uname": "SWesley"
        },
        {
            "country": "CAF",
            "uname": "EShafer"
        },
        {
            "country": "ATF",
            "uname": "LJaques"
        },
        {
            "country": "SHN",
            "uname": "JReith"
        },
        {
            "country": "TLS",
            "uname": "TBoynton"
        },
        {
            "country": "CIV",
            "uname": "TGuilfoyle"
        },
        {
            "country": "ESP",
            "uname": "LJarratt"
        },
        {
            "country": "DZA",
            "uname": "DDabbs"
        },
        {
            "country": "SYR",
            "uname": "SPatino"
        },
        {
            "country": "NCL",
            "uname": "KFruscione"
        },
        {
            "country": "VIR",
            "uname": "CHickey"
        },
        {
            "country": "SEN",
            "uname": "SPoer"
        },
        {
            "country": "ATF",
            "uname": "FEasterly"
        },
        {
            "country": "MRT",
            "uname": "KFultz"
        },
        {
            "country": "PRY",
            "uname": "CVera"
        },
        {
            "country": "NPL",
            "uname": "IAmick"
        },
        {
            "country": "JPN",
            "uname": "KKrout"
        },
        {
            "country": "MSR",
            "uname": "SPace"
        },
        {
            "country": "ARG",
            "uname": "GIbanez"
        },
        {
            "country": "PCN",
            "uname": "NFlanagan"
        },
        {
            "country": "NRU",
            "uname": "ARobertd"
        },
        {
            "country": "LTU",
            "uname": "MLevey"
        },
        {
            "country": "FRO",
            "uname": "RHaskin"
        },
        {
            "country": "CAF",
            "uname": "DTraverse"
        },
        {
            "country": "COM",
            "uname": "RCornwall"
        },
        {
            "country": "BLM",
            "uname": "YPatterson"
        },
        {
            "country": "GHA",
            "uname": "MBrinkley"
        },
        {
            "country": "FRA",
            "uname": "ESnyder"
        },
        {
            "country": "MUS",
            "uname": "LNemichand"
        },
        {
            "country": "AUT",
            "uname": "ACollier"
        },
        {
            "country": "NLD",
            "uname": "JCates"
        },
        {
            "country": "PRI",
            "uname": "DBogenschneider"
        },
        {
            "country": "VUT",
            "uname": "GLehman"
        },
        {
            "country": "IND",
            "uname": "IAntunes"
        },
        {
            "country": "FIN",
            "uname": "MImholtz"
        },
        {
            "country": "SOM",
            "uname": "DRamati"
        },
        {
            "country": "LBR",
            "uname": "LDawn"
        },
        {
            "country": "COL",
            "uname": "AHenke"
        },
        {
            "country": "TCD",
            "uname": "RCoffell"
        },
        {
            "country": "PRI",
            "uname": "BSmyth"
        },
        {
            "country": "NFK",
            "uname": "SWarren"
        },
        {
            "country": "PAN",
            "uname": "SChandler"
        },
        {
            "country": "NOR",
            "uname": "JBelcher"
        },
        {
            "country": "SLV",
            "uname": "MDouglas"
        },
        {
            "country": "TUV",
            "uname": "SBarnhorn"
        },
        {
            "country": "GNB",
            "uname": "GMccarthy"
        },
        {
            "country": "PYF",
            "uname": "OKaiser"
        },
        {
            "country": "FRA",
            "uname": "GCallison"
        },
        {
            "country": "FSM",
            "uname": "LScheider"
        },
        {
            "country": "MRT",
            "uname": "HEschenbacher"
        },
        {
            "country": "MKD",
            "uname": "MGeouque"
        },
        {
            "country": "MDG",
            "uname": "RVolz"
        },
        {
            "country": "PYF",
            "uname": "MJoachim"
        },
        {
            "country": "EST",
            "uname": "DGunter"
        },
        {
            "country": "SYC",
            "uname": "MCasariego"
        },
        {
            "country": "WLF",
            "uname": "CSchwartzberg"
        },
        {
            "country": "UMI",
            "uname": "MWilley"
        },
        {
            "country": "TCA",
            "uname": "PPainter"
        },
        {
            "country": "MDA",
            "uname": "EWeakliem"
        },
        {
            "country": "CHE",
            "uname": "WKnutson"
        },
        {
            "country": "AGO",
            "uname": "SGolaner"
        },
        {
            "country": "DZA",
            "uname": "DPresas"
        },
        {
            "country": "TUN",
            "uname": "BConk"
        },
        {
            "country": "NER",
            "uname": "CGilby"
        },
        {
            "country": "CAF",
            "uname": "EWalker"
        },
        {
            "country": "DJI",
            "uname": "LCarnu"
        },
        {
            "country": "GNB",
            "uname": "TLlewellyn"
        },
        {
            "country": "RUS",
            "uname": "EFaurest"
        },
        {
            "country": "SPM",
            "uname": "AWalley"
        },
        {
            "country": "TJK",
            "uname": "CTveter"
        },
        {
            "country": "MYT",
            "uname": "MBently"
        },
        {
            "country": "MRT",
            "uname": "KLlc"
        },
        {
            "country": "NGA",
            "uname": "ODebord"
        },
        {
            "country": "MRT",
            "uname": "BRipley"
        },
        {
            "country": "IND",
            "uname": "GLavallee"
        },
        {
            "country": "TGO",
            "uname": "BKasuganti"
        },
        {
            "country": "NER",
            "uname": "IAcosta"
        },
        {
            "country": "BGD",
            "uname": "GStabile"
        },
        {
            "country": "SRB",
            "uname": "KHobbs"
        },
        {
            "country": "SLV",
            "uname": "FCattanach"
        },
        {
            "country": "LBN",
            "uname": "GWathen"
        },
        {
            "country": "TUV",
            "uname": "TJarratt"
        },
        {
            "country": "NFK",
            "uname": "DLazier"
        },
        {
            "country": "SJM",
            "uname": "TDartmann"
        },
        {
            "country": "AFG",
            "uname": "KCoe"
        },
        {
            "country": "GNQ",
            "uname": "BAmacker"
        }
    ]

    return data[getRandomIntInclusive(0, 99)]
}

function getCountryCode(code) {
    const countries = [{
        name: "Afghanistan",
        two_letters_code: "AF",
        three_letters_code: "AFG"
    },
    {
        name: "Albania",
        two_letters_code: "AL",
        three_letters_code: "ALB"
    },
    {
        name: "Algeria",
        two_letters_code: "DZ",
        three_letters_code: "DZA"
    },
    {
        name: "American_Samoa",
        two_letters_code: "AS",
        three_letters_code: "ASM"
    },
    {
        name: "Andorra",
        two_letters_code: "AD",
        three_letters_code: "AND"
    },
    {
        name: "Angola",
        two_letters_code: "AO",
        three_letters_code: "AGO"
    },
    {
        name: "Anguilla",
        two_letters_code: "AI",
        three_letters_code: "AIA"
    },
    {
        name: "Antarctica",
        two_letters_code: "AQ",
        three_letters_code: "ATA"
    },
    {
        name: "Antigua_and_Barbuda",
        two_letters_code: "AG",
        three_letters_code: "ATG"
    },
    {
        name: "Argentina",
        two_letters_code: "AR",
        three_letters_code: "ARG"
    },
    {
        name: "Armenia",
        two_letters_code: "AM",
        three_letters_code: "ARM"
    },
    {
        name: "Aruba",
        two_letters_code: "AW",
        three_letters_code: "ABW"
    },
    {
        name: "Australia",
        two_letters_code: "AU",
        three_letters_code: "AUS"
    },
    {
        name: "Austria",
        two_letters_code: "AT",
        three_letters_code: "AUT"
    },
    {
        name: "Azerbaijan",
        two_letters_code: "AZ",
        three_letters_code: "AZE"
    },
    {
        name: "Bahamas",
        two_letters_code: "BS",
        three_letters_code: "BHS"
    },
    {
        name: "Bahrain",
        two_letters_code: "BH",
        three_letters_code: "BHR"
    },
    {
        name: "Bangladesh",
        two_letters_code: "BD",
        three_letters_code: "BGD"
    },
    {
        name: "Barbados",
        two_letters_code: "BB",
        three_letters_code: "BRB"
    },
    {
        name: "Belarus",
        two_letters_code: "BY",
        three_letters_code: "BLR"
    },
    {
        name: "Belgium",
        two_letters_code: "BE",
        three_letters_code: "BEL"
    },
    {
        name: "Belize",
        two_letters_code: "BZ",
        three_letters_code: "BLZ"
    },
    {
        name: "Benin",
        two_letters_code: "BJ",
        three_letters_code: "BEN"
    },
    {
        name: "Bermuda",
        two_letters_code: "BM",
        three_letters_code: "BMU"
    },
    {
        name: "Bhutan",
        two_letters_code: "BT",
        three_letters_code: "BTN"
    },
    {
        name: "Bolivia_(Plurinational_State_of)",
        two_letters_code: "BO",
        three_letters_code: "BOL"
    },
    {
        name: "Bonaire_Sint_Eustatius_and_Saba",
        two_letters_code: "BQ",
        three_letters_code: "BES"
    },
    {
        name: "Bosnia_and_Herzegovina",
        two_letters_code: "BA",
        three_letters_code: "BIH"
    },
    {
        name: "Botswana",
        two_letters_code: "BW",
        three_letters_code: "BWA"
    },
    {
        name: "Bouvet_Island",
        two_letters_code: "BV",
        three_letters_code: "BVT"
    },
    {
        name: "Brazil",
        two_letters_code: "BR",
        three_letters_code: "BRA"
    },
    {
        name: "British_Indian_Ocean_Territory",
        two_letters_code: "IO",
        three_letters_code: "IOT"
    },
    {
        name: "Brunei_Darussalam",
        two_letters_code: "BN",
        three_letters_code: "BRN"
    },
    {
        name: "Bulgaria",
        two_letters_code: "BG",
        three_letters_code: "BGR"
    },
    {
        name: "Burkina_Faso",
        two_letters_code: "BF",
        three_letters_code: "BFA"
    },
    {
        name: "Burundi",
        two_letters_code: "BI",
        three_letters_code: "BDI"
    },
    {
        name: "Cabo_Verde",
        two_letters_code: "CV",
        three_letters_code: "CPV"
    },
    {
        name: "Cambodia",
        two_letters_code: "KH",
        three_letters_code: "KHM"
    },
    {
        name: "Cameroon",
        two_letters_code: "CM",
        three_letters_code: "CMR"
    },
    {
        name: "Canada",
        two_letters_code: "CA",
        three_letters_code: "CAN"
    },
    {
        name: "Cayman_Islands",
        two_letters_code: "KY",
        three_letters_code: "CYM"
    },
    {
        name: "Central_African_Republic",
        two_letters_code: "CF",
        three_letters_code: "CAF"
    },
    {
        name: "Chad",
        two_letters_code: "TD",
        three_letters_code: "TCD"
    },
    {
        name: "Chile",
        two_letters_code: "CL",
        three_letters_code: "CHL"
    },
    {
        name: "China",
        two_letters_code: "CN",
        three_letters_code: "CHN"
    },
    {
        name: "Christmas_Island",
        two_letters_code: "CX",
        three_letters_code: "CXR"
    },
    {
        name: "Cocos_(Keeling)_Islands",
        two_letters_code: "CC",
        three_letters_code: "CCK"
    },
    {
        name: "Colombia",
        two_letters_code: "CO",
        three_letters_code: "COL"
    },
    {
        name: "Comoros",
        two_letters_code: "KM",
        three_letters_code: "COM"
    },
    {
        name: "Congo_(the_Democratic_Republic_of_the)",
        two_letters_code: "CD",
        three_letters_code: "COD"
    },
    {
        name: "Congo",
        two_letters_code: "CG",
        three_letters_code: "COG"
    },
    {
        name: "Cook_Islands",
        two_letters_code: "CK",
        three_letters_code: "COK"
    },
    {
        name: "Costa_Rica",
        two_letters_code: "CR",
        three_letters_code: "CRI"
    },
    {
        name: "Croatia",
        two_letters_code: "HR",
        three_letters_code: "HRV"
    },
    {
        name: "Cuba",
        two_letters_code: "CU",
        three_letters_code: "CUB"
    },
    {
        name: "Curaçao",
        two_letters_code: "CW",
        three_letters_code: "CUW"
    },
    {
        name: "Cyprus",
        two_letters_code: "CY",
        three_letters_code: "CYP"
    },
    {
        name: "Czechia",
        two_letters_code: "CZ",
        three_letters_code: "CZE"
    },
    {
        name: "Côte_d'Ivoire",
        two_letters_code: "CI",
        three_letters_code: "CIV"
    },
    {
        name: "Denmark",
        two_letters_code: "DK",
        three_letters_code: "DNK"
    },
    {
        name: "Djibouti",
        two_letters_code: "DJ",
        three_letters_code: "DJI"
    },
    {
        name: "Dominica",
        two_letters_code: "DM",
        three_letters_code: "DMA"
    },
    {
        name: "Dominican_Republic",
        two_letters_code: "DO",
        three_letters_code: "DOM"
    },
    {
        name: "Ecuador",
        two_letters_code: "EC",
        three_letters_code: "ECU"
    },
    {
        name: "Egypt",
        two_letters_code: "EG",
        three_letters_code: "EGY"
    },
    {
        name: "El_Salvador",
        two_letters_code: "SV",
        three_letters_code: "SLV"
    },
    {
        name: "Equatorial_Guinea",
        two_letters_code: "GQ",
        three_letters_code: "GNQ"
    },
    {
        name: "Eritrea",
        two_letters_code: "ER",
        three_letters_code: "ERI"
    },
    {
        name: "Estonia",
        two_letters_code: "EE",
        three_letters_code: "EST"
    },
    {
        name: "Eswatini",
        two_letters_code: "SZ",
        three_letters_code: "SWZ"
    },
    {
        name: "Ethiopia",
        two_letters_code: "ET",
        three_letters_code: "ETH"
    },
    {
        name: "Falkland_Islands_[Malvinas]",
        two_letters_code: "FK",
        three_letters_code: "FLK"
    },
    {
        name: "Faroe_Islands",
        two_letters_code: "FO",
        three_letters_code: "FRO"
    },
    {
        name: "Fiji",
        two_letters_code: "FJ",
        three_letters_code: "FJI"
    },
    {
        name: "Finland",
        two_letters_code: "FI",
        three_letters_code: "FIN"
    },
    {
        name: "France",
        two_letters_code: "FR",
        three_letters_code: "FRA"
    },
    {
        name: "French_Guiana",
        two_letters_code: "GF",
        three_letters_code: "GUF"
    },
    {
        name: "French_Polynesia",
        two_letters_code: "PF",
        three_letters_code: "PYF"
    },
    {
        name: "French_Southern_Territories",
        two_letters_code: "TF",
        three_letters_code: "ATF"
    },
    {
        name: "Gabon",
        two_letters_code: "GA",
        three_letters_code: "GAB"
    },
    {
        name: "Gambia",
        two_letters_code: "GM",
        three_letters_code: "GMB"
    },
    {
        name: "Georgia",
        two_letters_code: "GE",
        three_letters_code: "GEO"
    },
    {
        name: "Germany",
        two_letters_code: "DE",
        three_letters_code: "DEU"
    },
    {
        name: "Ghana",
        two_letters_code: "GH",
        three_letters_code: "GHA"
    },
    {
        name: "Gibraltar",
        two_letters_code: "GI",
        three_letters_code: "GIB"
    },
    {
        name: "Greece",
        two_letters_code: "GR",
        three_letters_code: "GRC"
    },
    {
        name: "Greenland",
        two_letters_code: "GL",
        three_letters_code: "GRL"
    },
    {
        name: "Grenada",
        two_letters_code: "GD",
        three_letters_code: "GRD"
    },
    {
        name: "Guadeloupe",
        two_letters_code: "GP",
        three_letters_code: "GLP"
    },
    {
        name: "Guam",
        two_letters_code: "GU",
        three_letters_code: "GUM"
    },
    {
        name: "Guatemala",
        two_letters_code: "GT",
        three_letters_code: "GTM"
    },
    {
        name: "Guernsey",
        two_letters_code: "GG",
        three_letters_code: "GGY"
    },
    {
        name: "Guinea",
        two_letters_code: "GN",
        three_letters_code: "GIN"
    },
    {
        name: "Guinea-Bissau",
        two_letters_code: "GW",
        three_letters_code: "GNB"
    },
    {
        name: "Guyana",
        two_letters_code: "GY",
        three_letters_code: "GUY"
    },
    {
        name: "Haiti",
        two_letters_code: "HT",
        three_letters_code: "HTI"
    },
    {
        name: "Heard_Island_and_McDonald_Islands",
        two_letters_code: "HM",
        three_letters_code: "HMD"
    },
    {
        name: "Holy_See",
        two_letters_code: "VA",
        three_letters_code: "VAT"
    },
    {
        name: "Honduras",
        two_letters_code: "HN",
        three_letters_code: "HND"
    },
    {
        name: "Hong_Kong",
        two_letters_code: "HK",
        three_letters_code: "HKG"
    },
    {
        name: "Hungary",
        two_letters_code: "HU",
        three_letters_code: "HUN"
    },
    {
        name: "Iceland",
        two_letters_code: "IS",
        three_letters_code: "ISL"
    },
    {
        name: "India",
        two_letters_code: "IN",
        three_letters_code: "IND"
    },
    {
        name: "Indonesia",
        two_letters_code: "ID",
        three_letters_code: "IDN"
    },
    {
        name: "Iran_(Islamic_Republic_of)",
        two_letters_code: "IR",
        three_letters_code: "IRN"
    },
    {
        name: "Iraq",
        two_letters_code: "IQ",
        three_letters_code: "IRQ"
    },
    {
        name: "Ireland",
        two_letters_code: "IE",
        three_letters_code: "IRL"
    },
    {
        name: "Isle_of_Man",
        two_letters_code: "IM",
        three_letters_code: "IMN"
    },
    {
        name: "Israel",
        two_letters_code: "IL",
        three_letters_code: "ISR"
    },
    {
        name: "Italy",
        two_letters_code: "IT",
        three_letters_code: "ITA"
    },
    {
        name: "Jamaica",
        two_letters_code: "JM",
        three_letters_code: "JAM"
    },
    {
        name: "Japan",
        two_letters_code: "JP",
        three_letters_code: "JPN"
    },
    {
        name: "Jersey",
        two_letters_code: "JE",
        three_letters_code: "JEY"
    },
    {
        name: "Jordan",
        two_letters_code: "JO",
        three_letters_code: "JOR"
    },
    {
        name: "Kazakhstan",
        two_letters_code: "KZ",
        three_letters_code: "KAZ"
    },
    {
        name: "Kenya",
        two_letters_code: "KE",
        three_letters_code: "KEN"
    },
    {
        name: "Kiribati",
        two_letters_code: "KI",
        three_letters_code: "KIR"
    },
    {
        name: "Korea_(the_Democratic_People's_Republic_of)",
        two_letters_code: "KP",
        three_letters_code: "PRK"
    },
    {
        name: "Korea_(the_Republic_of)",
        two_letters_code: "KR",
        three_letters_code: "KOR"
    },
    {
        name: "Kuwait",
        two_letters_code: "KW",
        three_letters_code: "KWT"
    },
    {
        name: "Kyrgyzstan",
        two_letters_code: "KG",
        three_letters_code: "KGZ"
    },
    {
        name: "Lao_People's_Democratic_Republic",
        two_letters_code: "LA",
        three_letters_code: "LAO"
    },
    {
        name: "Latvia",
        two_letters_code: "LV",
        three_letters_code: "LVA"
    },
    {
        name: "Lebanon",
        two_letters_code: "LB",
        three_letters_code: "LBN"
    },
    {
        name: "Lesotho",
        two_letters_code: "LS",
        three_letters_code: "LSO"
    },
    {
        name: "Liberia",
        two_letters_code: "LR",
        three_letters_code: "LBR"
    },
    {
        name: "Libya",
        two_letters_code: "LY",
        three_letters_code: "LBY"
    },
    {
        name: "Liechtenstein",
        two_letters_code: "LI",
        three_letters_code: "LIE"
    },
    {
        name: "Lithuania",
        two_letters_code: "LT",
        three_letters_code: "LTU"
    },
    {
        name: "Luxembourg",
        two_letters_code: "LU",
        three_letters_code: "LUX"
    },
    {
        name: "Macao",
        two_letters_code: "MO",
        three_letters_code: "MAC"
    },
    {
        name: "Madagascar",
        two_letters_code: "MG",
        three_letters_code: "MDG"
    },
    {
        name: "Malawi",
        two_letters_code: "MW",
        three_letters_code: "MWI"
    },
    {
        name: "Malaysia",
        two_letters_code: "MY",
        three_letters_code: "MYS"
    },
    {
        name: "Maldives",
        two_letters_code: "MV",
        three_letters_code: "MDV"
    },
    {
        name: "Mali",
        two_letters_code: "ML",
        three_letters_code: "MLI"
    },
    {
        name: "Malta",
        two_letters_code: "MT",
        three_letters_code: "MLT"
    },
    {
        name: "Marshall_Islands",
        two_letters_code: "MH",
        three_letters_code: "MHL"
    },
    {
        name: "Martinique",
        two_letters_code: "MQ",
        three_letters_code: "MTQ"
    },
    {
        name: "Mauritania",
        two_letters_code: "MR",
        three_letters_code: "MRT"
    },
    {
        name: "Mauritius",
        two_letters_code: "MU",
        three_letters_code: "MUS"
    },
    {
        name: "Mayotte",
        two_letters_code: "YT",
        three_letters_code: "MYT"
    },
    {
        name: "Mexico",
        two_letters_code: "MX",
        three_letters_code: "MEX"
    },
    {
        name: "Micronesia_(Federated_States_of)",
        two_letters_code: "FM",
        three_letters_code: "FSM"
    },
    {
        name: "Moldova_(the_Republic_of)",
        two_letters_code: "MD",
        three_letters_code: "MDA"
    },
    {
        name: "Monaco",
        two_letters_code: "MC",
        three_letters_code: "MCO"
    },
    {
        name: "Mongolia",
        two_letters_code: "MN",
        three_letters_code: "MNG"
    },
    {
        name: "Montenegro",
        two_letters_code: "ME",
        three_letters_code: "MNE"
    },
    {
        name: "Montserrat",
        two_letters_code: "MS",
        three_letters_code: "MSR"
    },
    {
        name: "Morocco",
        two_letters_code: "MA",
        three_letters_code: "MAR"
    },
    {
        name: "Mozambique",
        two_letters_code: "MZ",
        three_letters_code: "MOZ"
    },
    {
        name: "Myanmar",
        two_letters_code: "MM",
        three_letters_code: "MMR"
    },
    {
        name: "Namibia",
        two_letters_code: "NA",
        three_letters_code: "NAM"
    },
    {
        name: "Nauru",
        two_letters_code: "NR",
        three_letters_code: "NRU"
    },
    {
        name: "Nepal",
        two_letters_code: "NP",
        three_letters_code: "NPL"
    },
    {
        name: "Netherlands",
        two_letters_code: "NL",
        three_letters_code: "NLD"
    },
    {
        name: "New_Caledonia",
        two_letters_code: "NC",
        three_letters_code: "NCL"
    },
    {
        name: "New_Zealand",
        two_letters_code: "NZ",
        three_letters_code: "NZL"
    },
    {
        name: "Nicaragua",
        two_letters_code: "NI",
        three_letters_code: "NIC"
    },
    {
        name: "Niger",
        two_letters_code: "NE",
        three_letters_code: "NER"
    },
    {
        name: "Nigeria",
        two_letters_code: "NG",
        three_letters_code: "NGA"
    },
    {
        name: "Niue",
        two_letters_code: "NU",
        three_letters_code: "NIU"
    },
    {
        name: "Norfolk_Island",
        two_letters_code: "NF",
        three_letters_code: "NFK"
    },
    {
        name: "Northern_Mariana_Islands",
        two_letters_code: "MP",
        three_letters_code: "MNP"
    },
    {
        name: "Norway",
        two_letters_code: "NO",
        three_letters_code: "NOR"
    },
    {
        name: "Oman",
        two_letters_code: "OM",
        three_letters_code: "OMN"
    },
    {
        name: "Pakistan",
        two_letters_code: "PK",
        three_letters_code: "PAK"
    },
    {
        name: "Palau",
        two_letters_code: "PW",
        three_letters_code: "PLW"
    },
    {
        name: "Palestine_State_of",
        two_letters_code: "PS",
        three_letters_code: "PSE"
    },
    {
        name: "Panama",
        two_letters_code: "PA",
        three_letters_code: "PAN"
    },
    {
        name: "Papua_New_Guinea",
        two_letters_code: "PG",
        three_letters_code: "PNG"
    },
    {
        name: "Paraguay",
        two_letters_code: "PY",
        three_letters_code: "PRY"
    },
    {
        name: "Peru",
        two_letters_code: "PE",
        three_letters_code: "PER"
    },
    {
        name: "Philippines",
        two_letters_code: "PH",
        three_letters_code: "PHL"
    },
    {
        name: "Pitcairn",
        two_letters_code: "PN",
        three_letters_code: "PCN"
    },
    {
        name: "Poland",
        two_letters_code: "PL",
        three_letters_code: "POL"
    },
    {
        name: "Portugal",
        two_letters_code: "PT",
        three_letters_code: "PRT"
    },
    {
        name: "Puerto_Rico",
        two_letters_code: "PR",
        three_letters_code: "PRI"
    },
    {
        name: "Qatar",
        two_letters_code: "QA",
        three_letters_code: "QAT"
    },
    {
        name: "Republic_of_North_Macedonia",
        two_letters_code: "MK",
        three_letters_code: "MKD"
    },
    {
        name: "Romania",
        two_letters_code: "RO",
        three_letters_code: "ROU"
    },
    {
        name: "Russian_Federation",
        two_letters_code: "RU",
        three_letters_code: "RUS"
    },
    {
        name: "Rwanda",
        two_letters_code: "RW",
        three_letters_code: "RWA"
    },
    {
        name: "Réunion",
        two_letters_code: "RE",
        three_letters_code: "REU"
    },
    {
        name: "Saint_Barthélemy",
        two_letters_code: "BL",
        three_letters_code: "BLM"
    },
    {
        name: "Saint_Helena,_Ascension_and_Tristan_da_Cunha",
        two_letters_code: "SH",
        three_letters_code: "SHN"
    },
    {
        name: "Saint_Kitts_and_Nevis",
        two_letters_code: "KN",
        three_letters_code: "KNA"
    },
    {
        name: "Saint_Lucia",
        two_letters_code: "LC",
        three_letters_code: "LCA"
    },
    {
        name: "Saint_Martin_(French_part)",
        two_letters_code: "MF",
        three_letters_code: "MAF"
    },
    {
        name: "Saint_Pierre_and_Miquelon",
        two_letters_code: "PM",
        three_letters_code: "SPM"
    },
    {
        name: "Saint_Vincent_and_the_Grenadines",
        two_letters_code: "VC",
        three_letters_code: "VCT"
    },
    {
        name: "Samoa",
        two_letters_code: "WS",
        three_letters_code: "WSM"
    },
    {
        name: "San_Marino",
        two_letters_code: "SM",
        three_letters_code: "SMR"
    },
    {
        name: "Sao_Tome_and_Principe",
        two_letters_code: "ST",
        three_letters_code: "STP"
    },
    {
        name: "Saudi_Arabia",
        two_letters_code: "SA",
        three_letters_code: "SAU"
    },
    {
        name: "Senegal",
        two_letters_code: "SN",
        three_letters_code: "SEN"
    },
    {
        name: "Serbia",
        two_letters_code: "RS",
        three_letters_code: "SRB"
    },
    {
        name: "Seychelles",
        two_letters_code: "SC",
        three_letters_code: "SYC"
    },
    {
        name: "Sierra_Leone",
        two_letters_code: "SL",
        three_letters_code: "SLE"
    },
    {
        name: "Singapore",
        two_letters_code: "SG",
        three_letters_code: "SGP"
    },
    {
        name: "Sint_Maarten_(Dutch_part)",
        two_letters_code: "SX",
        three_letters_code: "SXM"
    },
    {
        name: "Slovakia",
        two_letters_code: "SK",
        three_letters_code: "SVK"
    },
    {
        name: "Slovenia",
        two_letters_code: "SI",
        three_letters_code: "SVN"
    },
    {
        name: "Solomon_Islands",
        two_letters_code: "SB",
        three_letters_code: "SLB"
    },
    {
        name: "Somalia",
        two_letters_code: "SO",
        three_letters_code: "SOM"
    },
    {
        name: "South_Africa",
        two_letters_code: "ZA",
        three_letters_code: "ZAF"
    },
    {
        name: "South_Georgia_and_the_South_Sandwich_Islands",
        two_letters_code: "GS",
        three_letters_code: "SGS"
    },
    {
        name: "South_Sudan",
        two_letters_code: "SS",
        three_letters_code: "SSD"
    },
    {
        name: "Spain",
        two_letters_code: "ES",
        three_letters_code: "ESP"
    },
    {
        name: "Sri_Lanka",
        two_letters_code: "LK",
        three_letters_code: "LKA"
    },
    {
        name: "Sudan",
        two_letters_code: "SD",
        three_letters_code: "SDN"
    },
    {
        name: "Suriname",
        two_letters_code: "SR",
        three_letters_code: "SUR"
    },
    {
        name: "Svalbard_and_Jan_Mayen",
        two_letters_code: "SJ",
        three_letters_code: "SJM"
    },
    {
        name: "Sweden",
        two_letters_code: "SE",
        three_letters_code: "SWE"
    },
    {
        name: "Switzerland",
        two_letters_code: "CH",
        three_letters_code: "CHE"
    },
    {
        name: "Syrian_Arab_Republic",
        two_letters_code: "SY",
        three_letters_code: "SYR"
    },
    {
        name: "Taiwan_(Province_of_China)",
        two_letters_code: "TW",
        three_letters_code: "TWN"
    },
    {
        name: "Tajikistan",
        two_letters_code: "TJ",
        three_letters_code: "TJK"
    },
    {
        name: "Tanzania_United_Republic_of",
        two_letters_code: "TZ",
        three_letters_code: "TZA"
    },
    {
        name: "Thailand",
        two_letters_code: "TH",
        three_letters_code: "THA"
    },
    {
        name: "Timor-Leste",
        two_letters_code: "TL",
        three_letters_code: "TLS"
    },
    {
        name: "Togo",
        two_letters_code: "TG",
        three_letters_code: "TGO"
    },
    {
        name: "Tokelau",
        two_letters_code: "TK",
        three_letters_code: "TKL"
    },
    {
        name: "Tonga",
        two_letters_code: "TO",
        three_letters_code: "TON"
    },
    {
        name: "Trinidad_and_Tobago",
        two_letters_code: "TT",
        three_letters_code: "TTO"
    },
    {
        name: "Tunisia",
        two_letters_code: "TN",
        three_letters_code: "TUN"
    },
    {
        name: "Turkey",
        two_letters_code: "TR",
        three_letters_code: "TUR"
    },
    {
        name: "Turkmenistan",
        two_letters_code: "TM",
        three_letters_code: "TKM"
    },
    {
        name: "Turks_and_Caicos_Islands",
        two_letters_code: "TC",
        three_letters_code: "TCA"
    },
    {
        name: "Tuvalu",
        two_letters_code: "TV",
        three_letters_code: "TUV"
    },
    {
        name: "Uganda",
        two_letters_code: "UG",
        three_letters_code: "UGA"
    },
    {
        name: "Ukraine",
        two_letters_code: "UA",
        three_letters_code: "UKR"
    },
    {
        name: "United_Arab_Emirates",
        two_letters_code: "AE",
        three_letters_code: "ARE"
    },
    {
        name: "United_Kingdom_of_Great_Britain_and_Northern_Ireland",
        two_letters_code: "GB",
        three_letters_code: "GBR"
    },
    {
        name: "United_States_Minor_Outlying_Islands",
        two_letters_code: "UM",
        three_letters_code: "UMI"
    },
    {
        name: "United_States_of_America",
        two_letters_code: "US",
        three_letters_code: "USA"
    },
    {
        name: "Uruguay",
        two_letters_code: "UY",
        three_letters_code: "URY"
    },
    {
        name: "Uzbekistan",
        two_letters_code: "UZ",
        three_letters_code: "UZB"
    },
    {
        name: "Vanuatu",
        two_letters_code: "VU",
        three_letters_code: "VUT"
    },
    {
        name: "Venezuela_(Bolivarian_Republic_of)",
        two_letters_code: "VE",
        three_letters_code: "VEN"
    },
    {
        name: "Viet_Nam",
        two_letters_code: "VN",
        three_letters_code: "VNM"
    },
    {
        name: "Virgin_Islands_(British)",
        two_letters_code: "VG",
        three_letters_code: "VGB"
    },
    {
        name: "Virgin_Islands_(U.S.)",
        two_letters_code: "VI",
        three_letters_code: "VIR"
    },
    {
        name: "Wallis_and_Futuna",
        two_letters_code: "WF",
        three_letters_code: "WLF"
    },
    {
        name: "Western_Sahara",
        two_letters_code: "EH",
        three_letters_code: "ESH"
    },
    {
        name: "Yemen",
        two_letters_code: "YE",
        three_letters_code: "YEM"
    },
    {
        name: "Zambia",
        two_letters_code: "ZM",
        three_letters_code: "ZMB"
    },
    {
        name: "Zimbabwe",
        two_letters_code: "ZW",
        three_letters_code: "ZWE"
    },
    {
        name: "Åland_Islands",
        two_letters_code: "AX",
        three_letters_code: "ALA"
    }
    ]

    const country = countries.find(country => country.three_letters_code === code)
    return country.two_letters_code
}

window.makeLevel = makeLevel

