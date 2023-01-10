/**
 * Make an object to contain constants that will be used 
 * to configure the way the GUI is drawn and behaves.
 */

let defaultSequencerLineColor = '#707070'
let lighterSequencerColor = "#ababab"
function getGuiConfigurations(hideIcons=false) {
    return {
        hideIcons: hideIcons,
        sequencer: {
            top: 130,
            left: 260,
            width: 700,
            spaceBetweenRows: 80,
            color: defaultSequencerLineColor,
            lineWidth: 3,
        },
        defaultFont: {
            color: 'black' // "#575757",
        },
        notes: {
            circleRadiusUsedForNoteBankSpacing: 8,
            circleRadiusIncreaseWhenPlayingNote: 2,
            circleRadiusIncreaseWhenMovingNote: 1,
            volumes: {
                defaultVolume: .5,
                minimumVolume: .05,
                maximumVolume: 2,
                minimumCircleRadius: 4,
                maximumCircleRadius: 24,
                volumePresets: [.25, .5, .75, 1], // when you click a note in 'edit volumes' mode, it will iterate through this preset list of volumes
                volumeAdjustmentSensitivityDivider: 4 // when adjusting a notes volume by clicking and dragging it, the distance your mouse moves will be divided by this value to make volume adjustments more fine-tuned.
            }
        },
        midi: {
            velocity: {
                minimumVelocity: 1,
                maximumVelocity: 127,
            },
        },
        sampleBank: {
            top: 94,
            left: 100,
            spaceBetweenNotes: 40,
            borderPadding: 20
        },
        timeTrackingLines: {
            height: 20,
            color: 'black', // defaultSequencerLineColor,
        },
        subdivisionLines: {
            height: 20,
            color: defaultSequencerLineColor,
        },
        referenceLines: {
            height: 20,
            color: lighterSequencerColor, // meant to be slightly lighter than the subdivision line color
        },
        noteTrashBin: {
            top: 480,
            left: 100,
            width: 48,
            height: 48,
            color: "red",
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            }
        },
        pauseButton: {
            top: 94,
            left: 30,
            width: 48,
            height: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            }
        },
        restartSequencerButton: {
            top: 154,
            left: 30,
            width: 48,
            height: 48,
            icon: {
                width: 48,
                height: 48,
                topPadding: 0,
                leftPadding: 0,
            }
        },
        clearAllNotesButton: {
            top: 214,
            left: 30,
            width: 48,
            height: 48,
            icon: {
                width: 48,
                height: 48,
                topPadding: 0,
                leftPadding: 0,
            }
        },
        moveNotesModeButton: {
            top: 274,
            left: 30,
            width: 48,
            height: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        editVolumesModeButton: {
            top: 334,
            left: 30,
            width: 48,
            height: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        mouseEvents: {
            notePlacementPadding: 20, // give this many pixels of padding on either side of things when we're placing, so we don't have to place them _precisely_ on the line, the trash bin, etc.
            throwNoteAwaySidesPadding: 50, // 90, // throw notes away if they are this far from the left or right side of the sequencer
            throwNoteAwayTopAndBottomPadding: 50, // throw notes away if they are this far from the top or bottom of the sequencer
            throwRowAwaySidesPadding: 70,
            throwRowAwayTopAndBottomPadding: 70,
        },
        tempoTextInputBeatsPerLoop: {
            top: 50,
            left: 140,
            maximumValue: 9999 // fractional numbers less than this could go over the width of the text input
        },
        tempoTextInputBpm: {
            top: 12,
            left: 140,
            maximumValue: 99999 // fractional numbers less than this could go over the width of the text input
        },
        tempoTextInputMilliseconds: {
            top: 28,
            left: 140,
            maximumValue: 99999 // fractional numbers less than this could go over the width of the text input
        },
        tempoTextLabelBeats: {
            text: "beats long",
            color: "black",
            top: 69,
            left: 204,
        },
        tempoTextLabelBeatsPerMinute: {
            text: "beats per minute",
            color: "black",
            top: 33,
            left: 215,
        },
        tempoTextLabelMilliseconds: {
            text: "milliseconds",
            color: "black",
            top: 48,
            left: 215,
        },
        subdivisionLineTextInputs: {
            topPaddingPerRow: 0, // centered on sequencer line would be: -17
            leftPaddingPerRow: 10,
            maximumValue: 1000,
        },
        referenceLineTextInputs: {
            topPaddingPerRow: -35,
            leftPaddingPerRow: 10,
            maximumValue: 1000,
        },
        buttonBehavior: {
            showClicksForHowManyMilliseconds: 100,
            clickedButtonColor: "#b8b8b8",
        },
        clearRowButtons: {
            topPaddingPerRow: -24,
            leftPaddingPerRow: 166,
            height: 48,
            width: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            }
        },
        addRowButton: {
            topPadding: 60,
            leftPadding: 0,
            height: 48,
            width: 700,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        tempoInputModeSelectionBpmButton: { // button for toggling between different modes of inputting tempo. this one is to select 'beats per minute' input mode.
            top: 20,
            left: 12,
            height: 48,
            width: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        tempoInputModeSelectionMillisecondsButton: { // button for toggling between different modes of inputting tempo. this one is to select 'loop length in milliseconds' input mode.
            top: 20,
            left: 68,
            height: 48,
            width: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        tapTempoButton: {
            top: 20,
            left: 380,
            height: 48,
            width: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        sequencerRowHandles: { // these will be circles, one to the left of each sequencer row, that allow you to select the row and click-drag it.
            topPadding: 0,
            leftPadding: -30,
            radius: 6,
            unselectedColor: lighterSequencerColor,
            selectedColor: defaultSequencerLineColor,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            }
        },
        volumeAdjusterRowHandles: { // these will probably be replaced with an icon eventually, but adding circles for now as a placeholder. click and drag these to adjust the volume for one row
            topPadding: 0,
            leftPadding: -60,
            radius: 6,
            unselectedColor: lighterSequencerColor,
            selectedColor: defaultSequencerLineColor,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            }
        },
        shiftToolRowHandles: { // these will probably be replaced with an icon eventually, but adding circles for now as a placeholder. click and drag these to use the 'shift' tool
            topPadding: 0,
            leftPadding: -90,
            radius: 6,
            unselectedColor: lighterSequencerColor,
            selectedColor: defaultSequencerLineColor,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            }
        },
        sequencerRowSelections: {
            leftPadding: -100,
            topPadding: -40,
            width: 295,
            height: 80,
        },
        quantizationButtons: {
            topPaddingPerRow: -24,
            leftPaddingPerRow: 76,
            height: 48,
            width: 48,
            icon: {
                width: 48,
                height: 48,
                topPaddingPerRow: -24,
                leftPaddingPerRow: 76,
            }
        },
        midiOutputSelector: {
            position: {
                top: 5,
                left: 900,
            }
        },
        drumkitSelector: {
            position: {
                top: 40,
                left: 900,
            },
            noWebAudioOutputOptionText: "No Live Audio Output",
        },
        shiftModeMoveNotesButton: {
            top: 20,
            left: 550,
            width: 48,
            height: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        shiftModeMoveSubdivisionLinesButton: {
            top: 20,
            left: 610,
            width: 48,
            height: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        shiftModeMoveReferenceLinesButton: {
            top: 20,
            left: 670,
            width: 48,
            height: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        shiftModeResetReferenceLinesForRowButtons: {
            topPaddingPerRow: -33,
            leftPaddingPerRow: 130,
            height: 30,
            width: 30,
            icon: {
                height: 30,
                width: 30,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        shiftModeResetSubdivisionLinesForRowButtons: {
            topPaddingPerRow: 2,
            leftPaddingPerRow: 130,
            height: 30,
            width: 30,
            icon: {
                height: 30,
                width: 30,
                topPadding: 0,
                leftPadding: 0,
            },
        },
        exportPatternToMidiFileButton: {
            top: 20,
            left: 830,
            height: 48,
            width: 48,
            icon: {
                height: 48,
                width: 48,
                topPadding: 0,
                leftPadding: 0,
            },
        },
    }
}