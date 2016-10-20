require 'test_helper'

class ChirpsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @chirp = chirps(:one)
  end

  test "should get index" do
    get chirps_url, as: :json
    assert_response :success
  end

  test "should create chirp" do
    assert_difference('Chirp.count') do
      post chirps_url, params: { chirp: { author: @chirp.author, content: @chirp.content } }, as: :json
    end

    assert_response 201
  end

  test "should show chirp" do
    get chirp_url(@chirp), as: :json
    assert_response :success
  end

  test "should update chirp" do
    patch chirp_url(@chirp), params: { chirp: { author: @chirp.author, content: @chirp.content } }, as: :json
    assert_response 200
  end

  test "should destroy chirp" do
    assert_difference('Chirp.count', -1) do
      delete chirp_url(@chirp), as: :json
    end

    assert_response 204
  end
end
