/**
 * Created by Kelvin Ishigo on 1/29/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {MDPExtraActionTypes, MDPPlayActionTypes} from "../actions/ActionTypes";

const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus efficitur, neque a pretium tincidunt, dolor eros gravida magna, vel ultricies dolor dui non nisl. Aliquam id aliquam urna. In facilisis ante ac hendrerit venenatis.


- Sed sed mattis libero: http://example.com/liber\n \
- Fusce vulputate aliquam venenatis: http://example.com/venenatis\n \

Proin ut dapibus libero, eu vestibulum elit.
Sed lorem libero, semper eget risus ac, suscipit dapibus dui.

lorem@example.com
`;

export const MDPTestData = {
	mdp: {
		heroPart: {
			heroTitle: "A Movie Title",
			modeStyle: "dark",
			heroBackground: {
				heroImageUrl: 'https://images.moviesanywhere.com/b746197ef922fd1b7bd89a6091973462/774b0ffd-f73c-4b09-94b5-e7e389cae7f3.jpg?w=2560&r=16x9',
				backgroundColor: '#222222'
			},
			mdpPoster: {
				posterUrl: 'MA_Header_Logo.png',
			},
			releaseDate: "2017",
			durationMinutes: 134,
			rating: "PG-13",
			description: "Only the Brave, based on the true story of the Granite Mountain Hotshots, is the heroic story of a team of local firefighters who - through hope, determination and sacrifice - become one of the most elite firefighting teams in the nation. Starring Josh Brolin, Miles Teller, Taylor Kitsch, Jeff Bridges, James Badge Dale and Jennifer Connelly, the firefighters forge a unique brotherhood that comes into focus as they fight a fateful fire to protect our lives, our homes and everything we hold dear.",
			license: "All transactions are subject to applicable license terms and conditions.",
			director: "Joseph Kosinski",
			producers: "Lorenzo di Bonaventura\nMolly Smith\nThad Luckinbill",
			cast: "Josh Brolin, Miles Teller, Jeff Bridges, Jennifer Connelly, James Badge Dale, Taylor Kitsch",
			buttons: [{title: "Play"}, {title: "Preview"}, {title: "Wishlist"}],
			actions: [
				{action: MDPPlayActionTypes.MDP_PLAY_ACTION, title: "Play", target: "testPlayOnly"},
				{action: MDPPlayActionTypes.MDP_PREVIEW_ACTION, title: "Preview", target: "testPreviewOnly"},
				{action: MDPPlayActionTypes.MDP_FOLLOW_ACTION, title: "Wishlist +", target: "testFollowOnly"},
			]

		},
		sliders: [
			{
				title: "TestRowOfCells",
				id: "xxx_0001",
				cells:
					[
						{
							type: "FormattedTextItem",
							text: sampleText,
							textColor: "red",
							fontSize: 8,
							actions: []
						},
						{
							type: "ImageItem",
							imageUrl: "MA_Header_Logo.png",
							actions: [
								{action: MDPPlayActionTypes.MDP_PLAY_ACTION, icon: "PlayArrow", targetUrl: "testPlayOnly"},
								{action: MDPPlayActionTypes.MDP_PREVIEW_ACTION, icon: "PlayArrow", targetUrl: "testPreviewOnly"}
							]
						}
					]
			},
			{
				title: "AnotherTestRowOfCells",
				id: "xxx_0002",
				cells:
					[
						{
							type: "FormattedTextItem",
							text: sampleText,
							textColor: "red",
							fontSize: 8,
							actions: [
								{action: MDPExtraActionTypes.MDP_JUMP_EXTRA, targetPath: "testPathOnly"}
							]
						},
						{
							type: "ImageItem",
							imageUrl: "MA_Header_Logo.png",
							actions: []
						}
					]
			}
		]
	}
};
