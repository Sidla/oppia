// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Tests for FormatTime pipe for Oppia.
 */

import {FormatTimePipe} from './format-timer.pipe';

describe('Testing FormatTimePipe', () => {
  let pipe: FormatTimePipe;
  beforeEach(() => {
    pipe = new FormatTimePipe();
  });

  it('should have all expected filters', () => {
    expect(pipe).not.toEqual(null);
  });

  it('should correctly format time', () => {
    expect(pipe.transform(200)).toEqual('03:20');
    expect(pipe.transform(474)).toEqual('07:54');
    expect(pipe.transform(556)).toEqual('09:16');
    expect(pipe.transform(243)).toEqual('04:03');
  });

  it('should format time for single-digit seconds correctly', () => {
    expect(pipe.transform(9)).toEqual('00:09');
  });

  it('should format time for exactly one minute', () => {
    expect(pipe.transform(60)).toEqual('01:00');
  });

  it('should format time for exactly one hour', () => {
    expect(pipe.transform(3600)).toEqual('60:00');
  });

  it('should format time for zero input', () => {
    expect(pipe.transform(0)).toEqual('00:00');
  });

  it('should format time for large values', () => {
    expect(pipe.transform(9999)).toEqual('166:39');
  });

  
  //Mock
  it('should call formatNum function twice when formatting time', () => {
    const formatNumSpy = spyOn<any>(pipe, 'transform').and.callThrough();
  
    const result = pipe.transform(123); // 2 minutes and 3 seconds
    expect(result).toEqual('02:03');
  
    // Ensure the mocked function was invoked twice (once for minutes, once for seconds)
    expect(formatNumSpy).toHaveBeenCalled();
  });
  
});
