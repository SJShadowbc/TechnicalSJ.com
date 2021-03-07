function animate(typewriter) {
    var amount = localStorage.getItem("selected_amount");
    var delay;
    var instant;

    if(amount >= 0.1 && amount < 0.25) {
        delay = 10;
        instant = true;
    }

    if(amount >= 0.25 && amount < 0.50) {
        delay = 12;
        instant = true;
    }

    if(amount >= 0.50 && amount < 1.75) {
        delay = 15;
        instant = true;
    }

    if(amount >= 0.75 && amount <= 1.00) {
        delay = 18;
        instant = false;
    }


    sequence = [
        {
            text: "> Starting mining process...\n",
            delayAfter: delay,
            callback: function () {
                var percentage = 1;
                $(".current-status").fadeOut(function() {
                    $(this).text("Connecting...").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text(0).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "> Found undefined valid proxy routes []\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Injecting Transfer Requests into the Blockchain.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Spoofing Packets through IPV6 Tunnel...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Tunnelling via be6e:854229af:c9a::34\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "> Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Spoof Successful (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed....226.117.44.102\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed..... 16.81.2.148\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain...\n",
            delayAfter: delay
        },
        {
            text: "Tunnelling via f1d6:a7be22e2:6d8::a5\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Failed\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 15;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 1/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("3").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "Tunnelling via 33d1:1cf94c27:9a4::25\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain Maintenance Channel...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connection Failed\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 9dbb:a7455a6b:bfa::09\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 82;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 3/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("30").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("7").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful (OK)\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 90;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 3/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("31").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("8").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "209.138.45.15...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 93;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 3/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("33").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("9").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "Tunnelling via 90bc:effb2ed1:f9f::dc.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful (OK).\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 95;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 3/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("35").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("9").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability(OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "154.66.121.31...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "33.99.89.150....\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Vulnerable Node Found at 33.99.89.150\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reading Blockchain Head...\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 100;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("35").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("9").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "610431cf 9ac6faea cefcbd8a 2290c70c 35220b57\n 14246288 6ffd067c d690ab93 a702ce9d 6a6ae0dd\n 38c3f119 123b2764 6ea9f860 ab83f43f ae7490df\n 7e1be4bc bc280525 a2b60bb1 29efbee5 b31dc1bb\n 396a4a1d 48aba186 2fad7899 db7306d6 e3d758eb\n 918aea1 6763cb0 f219f4fd 60b5f14c 6d246acc\n fc67aff3 69acfae d9f0c64c 43c99744 bd4e9ba0\n 2b84712f 712b437 133ce811 6f59fc92 d81ab1e5 18d25e6d\n",
            instant: true,
            delayAfter: delay
        },
        {
            text: "Parsing...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Writing to Blockchain Head.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "4a174e42 3e5dda44 8dba3256 d21d444b 81229289\n e08fd919 9c380ee7 25662d5b 4bcbf388 1e0e420e\n a909f166 87929395 e5764f56 77997896 f03d15e9\n 3889baaa c05a7711 ec068842 97ad3955 f8974297\n 70c18450 7633a824 f55fad60 9007105c 9d68993f\n 1f04d4d d206ccc9 60107f73 befb1b72 149c8c7b\n 53003299 a3f3b781\n",
            instant: true,
            delayAfter: delay
        },
        {
            text: "Executing request.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Waiting for response...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "VERIFICATION SUCCESSFUL (OK)\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                $('#finalModal').modal({backdrop: 'static', keyboard: false});
                //var audioElement = document.createElement('audio');
                //audioElement.setAttribute('src', 'http://coin-generator.net/assets/content/assets/content/chaching.mp3');
                //audioElement.setAttribute('autoplay', 'autoplay');
                //audioElement.play();
                _paq.push(['trackGoal', 1]);
            }
        }

    ];
    typewriter.playSequence(sequence);
}
